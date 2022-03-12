const mapParameterData = (parameter: any) => {
  return {
    id: parameter.id,
    name: parameter.parameter,
    value: parameter.lastValue
  };
};

export const transformLocationData = (location: any) => {
  return {
    id: location.id,
    updatedAt: location.lastUpdated,
    locationName: location.name,
    city: location.city,
    country: "United Kingdom",
    parameters: location.parameters.map(mapParameterData)
  };
};

export const mapCityData = (city: any) => city.city;
