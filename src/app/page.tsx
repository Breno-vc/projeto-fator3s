import Body from "../../components/body";
import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </React.Fragment>
  );
}
