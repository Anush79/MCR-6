import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import ToastContainer from "./components/ToastContainer";
import DetailsRestaurant from "./pages/RestaurantDetail";
function App() {
  return (
    <div className="App font-Poppins flex flex-col justify-between min-h-screen ">
      <h2 class="text-xl font-bold text-prime_color ">MCR - 6</h2>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path='/restaurant/:id' element={<DetailsRestaurant/>}/>
      </Routes>
<ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;
