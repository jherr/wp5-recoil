import React from "react";
import { RecoilRoot } from "recoil";

import "antd/dist/antd.css";

import Header from "nav/Header";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <h2>Search page!</h2>
    </RecoilRoot>
  );
}

export default App;
