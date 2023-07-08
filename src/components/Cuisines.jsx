import Card from "./CuisineCard";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Cuisines({ data }) {
  const {
    id,
    name,

    address,
    phone,
    menu,
    ratings,
    averageRating,
    description,
  } = data;

  return (
    <div>
      <NavLink to={`/restaurant/${id}`}>
      <h2 className="text-3xl">Dishes by {name} <ArrowForwardIcon/></h2>
        
        </NavLink>
      <div className="flex  justify-center gap-2">
         {menu.map((item) => {
        return <Card key={item.id} item={item} restName={name} restId={id} />;
      })}
      </div>
     
    </div>
  );
}
