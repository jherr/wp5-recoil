import React from "react";
import { Layout } from "antd";
import { useRecoilValue } from "recoil";
import { cartCount } from "home/atoms";

export default () => {
  const count = useRecoilValue(cartCount);
  return (
    <Layout.Header>
      <h1 style={{ color: "white" }}>Header - {count} items</h1>
    </Layout.Header>
  );
};
