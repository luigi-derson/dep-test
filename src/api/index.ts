import axios from "../utils/axios";
import { mapCityData, transformLocationData } from "../utils/results";

export const getLocationByCity = async (city: string) => {
  try {
    const response = await axios.get("/v2/locations", {
      params: {
        sort: "desc",
        country_id: "GB",
        order_by: "lastUpdated",
        city
      }
    });

    const latestResult = response.data.results[0];

    return transformLocationData(latestResult);
  } catch (error) {
    return error;
  }
};

export const getCitiesByCountry = async (country: string) => {
  try {
    const response = await axios.get("/v2/cities", {
      params: {
        limit: 120,
        sort: "asc",
        country_id: country,
        order_by: "city"
      }
    });

    return response.data.results.map(mapCityData);
  } catch (error) {
    return error;
  }
};
