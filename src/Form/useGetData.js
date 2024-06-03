import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "./url";

export const useGetData = () => {
  const [exchangeData, setExchangeData] = useState({ loadingState: "loading" });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(apiURL);
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
