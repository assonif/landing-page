import Head from "next/head";

import Main from "./Main";
import { useEffect } from "react";
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
