import { TimeClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const actualDate = useCurrentDate();
  return (
    <>
      <TimeClock>Dzisiaj jest {actualDate}</TimeClock>
    </>
  );
};

export default Clock;
