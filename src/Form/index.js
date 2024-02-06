import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
    const myRate = currencies.find(({ name }) => name === target.value).value;
    setRate(myRate);
  };

  const onReset = () => {
    setCurrency("");
    setRate("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
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
                min="0"
                step="any"
                required
              />
            </label>
          </p>
        </fieldset>
        <div>
          <button className="form__button">Przelicz!</button>
          <button
            className="form__button form__button--clearButton"
            type="reset"
            onClick={onReset}
          >
            Wyczyść!
          </button>
        </div>
        <div className="form__footer">
          Kwota po przeliczeniu wynosi:
          <strong> {} </strong> złotych.
        </div>
      </form>
    </>
  );
};

export default Form;
