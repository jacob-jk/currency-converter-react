import { useState } from "react";
import { useGetData } from "./useGetData";

export const useCalculateResult = () => {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const { exchangeData } = useGetData();

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
    const selectedRate = exchangeData.data[target.value].value;
    setRate(selectedRate.toFixed(2));
  };

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    const outcome = (rate * amount).toFixed(2);
    setResult({
      outcome,
      currency,
      amount,
      date: new Date(exchangeData.actualDate).toLocaleDateString("pl-PL"),
    });
  };

  const onReset = () => {
    setCurrency("");
    setRate("");
    setAmount("");
    setResult("");
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
    exchangeData,
  ];
};
