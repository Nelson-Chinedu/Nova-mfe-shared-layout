import { BrowserRouter } from "react-router-dom";

import Layout from "./layout";

import "./index.css";

export default function Root() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
