import Head from "next/head";

import Main from "./Main";

import { Router } from "react-router-dom";

import GlobalStyles from "../styles/global";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
}
