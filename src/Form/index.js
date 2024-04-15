import { ThemeProvider } from "styled-components";
import {
  theme,
  Header,
  Fieldset,
  Category,
  Select,
  Buttons,
  Button,
  Conclusion,
} from "./styled";
import { currencies } from "../currencies";
import { useCalculateResult } from "./useCalculateResult";

const Form = () => {
  const [
    currency,
    rate,
    amount,
    result,
    onCurrencyChange,
    onAmountChange,
    onReset,
    onFormSubmit,
  ] = useCalculateResult();

  return (
    <ThemeProvider theme={theme}>
      <Header>Aktualny kurs walut</Header>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <p>
            <label>
              <Category>Waluta</Category>
              <Select
                name="currency"
                required
                value={currency}
                onChange={onCurrencyChange}
              >
                <option hidden>-brak-</option>
                {currencies.map((currency) => (
                  <option key={currency.id}>{currency.name}</option>
                ))}
              </Select>
            </label>
          </p>
          <p>
            <label>
              <Category>Kurs</Category>
              <Select
                as="input"
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
              <Category>Kwota</Category>
              <Select
                as="input"
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
        </Fieldset>
        <Buttons>
          <Button>Przelicz!</Button>
          <Button type="reset" onClick={onReset}>
            Wyczyść!
          </Button>
        </Buttons>
        <Conclusion>
          Kwota po przeliczeniu wynosi:
          <strong> {result} </strong> PLN.
        </Conclusion>
      </form>
    </ThemeProvider>
  );
};

export default Form;
