import { createContext, useContext, useEffect, useState } from "react";
import { cuisineData, restaurantsData } from "../data";
const DataContext = createContext();

export function DataProvider({ children }) {
  console.log({ cuisineData, restaurantsData });
  const [cuisineDataToShow, setCuisineDataToShow] = useState([]);
  const selectedCuisineRestData = (idOfCuisine) =>
    restaurantsData.filter((item) => item.cuisine_id === idOfCuisine);

  return (
    <DataContext.Provider
      value={{
        candidate: "Anushka Jaiswal",
        cuisineData,
        restaurantsData,
        cuisineDataToShow,
        selectedCuisineRestData,
        setCuisineDataToShow,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
