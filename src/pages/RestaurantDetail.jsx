import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Popover from '@mui/material/Popover';

import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { useData } from "../context/dataContext";

export default function DetailsRestaurant() {
  const { id: paramId } = useParams();
  const { restaurantsDataCopy, loggedInUserData } = useData();
  

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
      <header className="flex justify-between p-2 sticky top-0 bg-rose-500 text-white">
        <p className="text-xl font-bold ">FOOD <span className="text-4xl">.</span></p>
      <img title={loggedInUserData?.userName} src={loggedInUserData.profileAvatar} alt={loggedInUserData.userName}  className="w-12 hover:bg-sky-900 "/>
      </header>
      <section className=" flex m-auto w-3/4 items-center justify-between  py-2 border-b-4">
         <div>
       
          <header className="flex gap-2">
          <NavLink to="/">
            <ArrowBackIcon />
          </NavLink>
          <h1 className="text-4xl">{name}</h1>
        </header>
<div className="flex flex-col text-left text-gray-500 px-8">
          <p>{description}</p>
          <p className="flex gap-1">
            {menu.map((item) => (
              <span className=" ">{item.name}</span>
            ))}
          </p>
          <p>{address}</p>
          <p>{phone}</p>

          <p>Average rating: {averageRating}</p>
        </div>
        
        </div>
        <button
         variant="contained" onClick={handleClick}
          className="bg-rose-500 text-lime-200 p-2 rounded"
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
      </section>
      
   
         </div>
     
      
      <div className="m-auto text-center">
        {ratings.map((item) => (
          <ReviewCard data={item} />
        ))}
      </div>
    </div>
  );
}
