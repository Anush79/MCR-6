import { createContext, useContext, useEffect, useState } from "react";
import { cuisineData, restaurantsData } from "../data";
import {toast } from 'react-toastify'
const DataContext = createContext();

export function DataProvider({ children }) {
  const [cuisineDataToShow, setCuisineDataToShow] = useState([]);
  const [restaurantsDataCopy, setRestaurantData] = useState(restaurantsData);
  const [loggedInUserData, setLoggedInUser] = useState({
    userName: "Anushka",
    profileAvatar:
      "https://www.shareicon.net/data/512x512/2016/08/18/814068_face_512x512.png",
  });
  const selectedCuisineRestData = (idOfCuisine) =>
    restaurantsDataCopy.filter((item) => item.cuisine_id === idOfCuisine);

  const AddReviewFunction = (e, reviewData, id) => {
    e.preventDefault();
    const foundRest = restaurantsDataCopy?.find((item) => item.id === id);
    foundRest?.ratings?.push(reviewData);
    setRestaurantData((prevData) =>
      prevData.map((item) => (item?.id === id ? foundRest : item))
    );
    toast.success("Review Added successfully")
  };

  return (
    <DataContext.Provider
      value={{
        candidate: "Anushka Jaiswal",
        cuisineData,
        restaurantsDataCopy,
        cuisineDataToShow,
        selectedCuisineRestData,
        setCuisineDataToShow,
        loggedInUserData,
        AddReviewFunction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
