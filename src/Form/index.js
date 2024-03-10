import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
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

  return (
    <>
      <p className="form__header">
        <strong>Aktualny kurs walut</strong>
      </p>
      <form onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <p>
            <label>
              <span className="form__positions">Waluta</span>
              <select
                className="form__box"
                name="currency"
                required
                value={currency}
                onChange={onCurrencyChange}
              >
                <option hidden>-brak-</option>
                {currencies.map((currency) => (
                  <option key={currency.id}>{currency.name}</option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <label>
              <span className="form__positions">Kurs</span>
              <input
                className="form__box"
                type="number"
                name="rate"
                step="any"
                min="0"
                value={rate}
                required
                disabled
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form__positions">Kwota</span>
              <input
                className="form__box"
                type="number"
                name="amount"
                placeholder="Wpisz kwotę"
                value={amount}
                min="0"
                step="any"
                required
                onChange={onAmountChange}
              />
            </label>
          </p>
        </fieldset>
        <div className="form__Button">
          <button className="form__countButton">Przelicz!</button>
          <button
            className="form__countButton form__countButton--clearButton"
            type="reset"
            onClick={onReset}
          >
            Wyczyść!
          </button>
        </div>
        <div className="form__footer">
          Kwota po przeliczeniu wynosi:
          <strong> {result} </strong> PLN.
        </div>
      </form>
    </>
  );
};

export default Form;
