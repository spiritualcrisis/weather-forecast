import axios from "axios";

import { BASE_URL } from "../config";

export const getWeatherData = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
