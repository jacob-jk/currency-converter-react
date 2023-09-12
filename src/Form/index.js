import "./style.css";

const Form = () => (
  <form>
    <fieldset className="form__fieldset">
      <p>
        <label>
          <span className="form__positions">Waluta</span>
          <select className="form__box" name="currency" required>
            <option value="" disabled selected hidden>
              -brak-
            </option>
            <option value="euro">euro</option>
            <option value="dolar">dolar</option>
            <option value="funt">funt</option>
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
  </form>
);

export default Form;
