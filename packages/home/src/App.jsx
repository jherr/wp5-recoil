import React from "react";
import { Layout, Divider, Row, Col, Button } from "antd";
import { RecoilRoot, useRecoilState } from "recoil";

const Header = React.lazy(() => import("nav/Header"));

import "./index.less";

import { fruit, selectedItems } from "./atoms";

import ProductCarousel from "./ProductCarousel";
import TheBill from "./TheBill";

const ResetButton = () => {
  const [f, fruitSet] = useRecoilState(fruit);
  const [si, selectedSet] = useRecoilState(selectedItems);

  const onReset = () => {
    selectedSet([]);
    fruitSet([
      {
        name: "Pear",
        image: "http://localhost:3001/fruit/pear.jpg",
        price: 1,
      },
      {
        name: "Plum",
        image: "http://localhost:3001/fruit/plum.jpg",
        price: 1,
      },
      {
        name: "Strawberries",
        image: "http://localhost:3001/fruit/strawberry.jpg",
        price: 1,
      },
      {
        name: "Watermelon",
        image: "http://localhost:3001/fruit/watermelon.jpg",
        price: 5,
      },
    ]);
  };

  return <Button onClick={onReset}>Reset Items!</Button>;
};

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800 }}>
        <React.Suspense fallback={<div />}>
          <Header />
        </React.Suspense>
        <Layout.Content style={{ padding: "2em" }}>
          <ResetButton />
          <Row gutter={6}>
            <Col span={18}>
              <Divider orientation="left">Products You Might Like</Divider>
              <ProductCarousel />
            </Col>
            <Col span={6}>
              <h1>The Bill</h1>
              <TheBill />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
