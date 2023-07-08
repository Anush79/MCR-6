import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";
import Card from "./CuisineCard";
export default function Cuisines({ data }) {
  const { id, name, menu } = data;

  return (
    <div>
      <NavLink to={`/restaurant/${id}`}>
        <h2 className="text-3xl">
          Dishes by {name} <ArrowForwardIcon />
        </h2>
      </NavLink>
      <div className="flex  justify-center gap-2">
        {menu.map((item) => {
          return <Card key={item.id} item={item} restName={name} restId={id} />;
        })}
      </div>
    </div>
  );
}
