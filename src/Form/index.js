import { ThemeProvider } from "styled-components";
import {
  theme,
  ContainerBox,
  Header,
  Fieldset,
  Category,
  Select,
  Buttons,
  Button,
  LoadingStatus,
  FailureState,
} from "./styled";
import { useCalculateResult } from "./useCalculateResult";
import Calculation from "./Calculation";

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
    exchangeData,
  ] = useCalculateResult();

  return (
    <ContainerBox>
      <ThemeProvider theme={theme}>
        {exchangeData.loadingState === "loading" ? (
          <LoadingStatus>
            <img
              src="https://hilarus.com/wp-content/uploads/2020/09/klepsydra_3_32kl_zmniejsz_50x50-zgr-z-rej-ekr-SKROC-2.gif"
              alt="clepsyder"
              width="30px"
              height="30px"
            />
            Zaczekaj chwilę! Trwa pobieranie kursów walut...
            <img
              src="https://hilarus.com/wp-content/uploads/2020/09/klepsydra_3_32kl_zmniejsz_50x50-zgr-z-rej-ekr-SKROC-2.gif"
              alt="clepsyder"
              width="30px"
              height="30px"
            />
          </LoadingStatus>
        ) : exchangeData.loadingState === "error" ? (
          <FailureState>
            <img
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/274c.gif"
              alt="clepsyder"
              width="30px"
              height="30px"
            />
            Wystąpił błąd! Sprawdź swoje połączenie z siecią lub daj nam
            chwilkę.
            <img
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/274c.gif"
              alt="clepsyder"
              width="30px"
              height="30px"
            />
          </FailureState>
        ) : (
          <>
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
                      {Object.keys(exchangeData.data).map((currency) => (
                        <option key={currency}>{currency}</option>
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
              <Calculation result={result} />
            </form>
          </>
        )}
      </ThemeProvider>
    </ContainerBox>
  );
};

export default Form;
