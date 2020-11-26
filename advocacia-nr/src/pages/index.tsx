import Head from "next/head";

import HeaderInfo from "../components/HeaderInfo";
import Header from "../components/Header";
import GlobalStyles from "../styles/global";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <HeaderInfo />
      <Header />
    </>
  );
}
