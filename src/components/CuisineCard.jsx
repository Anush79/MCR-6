import { NavLink } from "react-router-dom";
export default function Card({ item, restName, restId }) {
  const { name, imgSrc, price, qty } = item;
  return (
    <div>
      <img src={imgSrc} alt={name} className="w-25 h-32 object-cover" />
      <h4>{name}</h4>
      <p>
        ${price} for {qty}
      </p>

      <NavLink to={`/restaurant/${restId}`}>
        <p>{restName}</p>
      </NavLink>
    </div>
  );
}
