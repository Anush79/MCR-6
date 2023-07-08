import { NavLink } from "react-router-dom";
import { useData } from "../context/dataContext";
export default function Footer() {
  const { candidate } = useData();
  return (
    <footer className="my-2">
       <p>MCR-6</p>
      <small>
        Made with React by{" "}
        <NavLink to="https://github.com/Anush79/MCR-6" target="_blank">
         
          <span className="border-b-2 border-blue-400 rounded p-1 ">
            {candidate}
          </span>
        </NavLink>
      </small>
    </footer>
  );
}
