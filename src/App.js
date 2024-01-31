// import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import Footer from "./Footer";
// import { currencies } from "./currencies";

function App() {
  // const changeRate = (currency) =>
  //   currencies.find(({ name, rate }) => {
  //     if (name === currency) {
  //       return rate;
  //     }
  //   });

  return (
    <Container>
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
