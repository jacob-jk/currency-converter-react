// import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
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
    </Container>
  );
}

export default App;
