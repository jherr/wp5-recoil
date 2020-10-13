import React from "react";
import { RecoilRoot } from "recoil";

import "antd/dist/antd.css";

import Header from "./Header";

export default () => (
  <RecoilRoot>
    <Header />
  </RecoilRoot>
);
