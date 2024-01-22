import "./style.css";
import { currencies } from "../currencies";

const Form = ({ currency, changeCurrency, setRate }) => (
  <>
    <p className="form__header">
      <strong>Aktualny kurs walut</strong>
    </p>
    <form>
      <fieldset className="form__fieldset">
        <p>
          <label>
            <span className="form__positions">Waluta</span>
            <select
              className="form__box"
              name="currency"
              required
              value={currency}
              onChange={changeCurrency}
            >
              <option hidden>-brak-</option>
              {currencies.map(({ id, name }) => (
                <option key={id}>{name}</option>
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
              required
              disabled
              onChange={setRate}
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
        <button className="form__button form__button--clearButton" type="reset">
          Wyczyść!
        </button>
      </div>
    </form>
  </>
);

export default Form;
