import { useState } from "react";
import { currencies } from "../currencies";

export const useCalculateResult = () => {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("0,00");

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
    const selectedRate = currencies.find(
      ({ name }) => name === target.value
    ).value;
    setRate(selectedRate);
  };

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    const outcome = rate * amount;
    setResult(outcome.toFixed(2));
  };

  const onReset = () => {
    setCurrency("");
    setRate("");
    setAmount("");
    setResult("0,00");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return [
    currency,
    rate,
    amount,
    result,
    onCurrencyChange,
    onAmountChange,
    onReset,
    onFormSubmit,
  ];
};
