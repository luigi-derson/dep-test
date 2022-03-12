import { useEffect, useState } from "react";
import { getCitiesByCountry } from "../api/index";

export default function useCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await getCitiesByCountry("GB");

        setCities(cities);
      } catch (error) {
        // Notify Server error
      }
    };

    fetchCities();
  }, []);

  return cities;
}
