import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import Footer from "./Footer";
import { currencies } from "./currencies";

function App() {
  const [currency, setCurrency] = useState(currencies[0]);

  const changeCurrency = ({ target }) => setCurrency(target.name);

  // const setRate = (currency) => {
  //   const rate = currencies.find(({ name }) => name === currency).value;
  // };

  return (
    <Container>
      <Form
        changeCurrency={changeCurrency}
        currency={currency}
        // setRate={setRate}
      />
      <Footer />
    </Container>
  );
}

export default App;
