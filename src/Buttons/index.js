import "./style.css";

const Buttons = () => (
  <div>
    <button className="form__button">Przelicz!</button>
    <button className="form__button form__button--clearButton" type="reset">
      Wyczyść!
    </button>
  </div>
);

export default Buttons;
