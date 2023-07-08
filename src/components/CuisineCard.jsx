import { NavLink } from "react-router-dom";
export default function Card({ item, restName, restId }) {
  const { name, imgSrc, price, qty } = item;
  return (
    <div className="bg-slate-100 p-1">
      <img src={imgSrc} alt={name} className="w-56 h-56 object-cover" />
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-slate-500 font">
        ${price} for {qty}
      </p>

      <NavLink to={`/restaurant/${restId}`}>
        <p className="text-slate-500">{restName}</p>
      </NavLink>
    </div>
  );
}
