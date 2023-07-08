import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Popover from '@mui/material/Popover';

import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { useData } from "../context/dataContext";

export default function DetailsRestaurant() {
  const { id: paramId } = useParams();
  const { restaurantsDataCopy } = useData();
  

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);



  const foundRestaurant = restaurantsDataCopy.find(
    (item) => item.id === Number(paramId)
  );
  const {
    id,
    name,
    address,
    phone,
    menu,
    ratings,
    averageRating,
    description,
  } = foundRestaurant;
  return (
    <div>
      <div>
        <header className="flex gap-2">
          <NavLink to="/">
            <ArrowBackIcon />
          </NavLink>
          <h1 className="text-4xl">{name}</h1>
        </header>
        <div className="flex flex-col">
          <p>{description}</p>
          <p className="flex gap-1">
            {menu.map((item) => (
              <span className=" text-gray-500">{item.name}</span>
            ))}
          </p>
          <p>{address}</p>
          <p>{phone}</p>

          <p>Average rating: {averageRating}</p>
        </div>
        <button
         variant="contained" onClick={handleClick}
          className="bg-rose-500 text-lime-200 p-2"
        >
          Add review
        </button>
        <Popover

        id={"Review Form"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ReviewForm restId={id} closefunction={handleClose} />
      </Popover>
      </div>
      
      <div>
        {ratings.map((item) => (
          <ReviewCard data={item} />
        ))}
      </div>
    </div>
  );
}
