import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import Landing from "./pages/Landing";
import DetailsRestaurant from "./pages/RestaurantDetail";

function App() {
  return (
    <div className="App font-Poppins flex flex-col justify-between min-h-screen ">
   
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/restaurant/:id" element={<DetailsRestaurant />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
