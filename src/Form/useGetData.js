import { useState, useEffect } from "react";
import axios from "axios";

export const useGetData = () => {
  const [exchangeData, setExchangeData] = useState({ loadingState: "loading" });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_AEpzNCETIAi0SG8Jnsj1XLgXroZkmjhT2VF7GQuY&base_currency=PLN"
        );
        setExchangeData({
          loadingState: "loaded",
          data: response.data.data,
          actualDate: response.data.meta.last_updated_at,
        });
      } catch (error) {
        setExchangeData("failure");
      }
    };
    setTimeout(getData, 2000);
  }, []);

  return { exchangeData };
};
