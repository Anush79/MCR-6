import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useParams } from "react-router-dom";
import { useData } from "../context/dataContext";
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { useState } from "react";
export default function DetailsRestaurant() {
  const { id: paramId } = useParams();
  const { restaurantsDataCopy } = useData();
  const [formOpen, setFormOpen] = useState(false)

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
        <button onClick={()=>{setFormOpen(!formOpen)}} className="bg-rose-500 text-lime-200 p-2" >Add review</button>
      </div>
      <div>
        {
          formOpen && <ReviewForm restId={id}/>
        }
      </div>
      <div>
        {
          ratings.map(item=><ReviewCard data={item}/>)
        }
      </div>
    </div>
  );
}
