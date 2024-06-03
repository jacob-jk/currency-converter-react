import { Conclusion } from "./styled";

const Calculation = ({ result }) => (
  <Conclusion>
    {result && (
      <p>
        Kwota po przeliczeniu na dzień {result.date}:
        <br />
        <strong> {parseFloat(result.amount).toFixed(2)} PLN&nbsp;</strong>=
        <strong>
          {" "}
          {result.outcome.toFixed(2)} {result.currency}
        </strong>
        .
      </p>
    )}
  </Conclusion>
);

export default Calculation;
