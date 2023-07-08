
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App font-Poppins flex flex-col justify-between min-h-screen ">
     <h2 class="text-xl font-bold underline text-prime_color ">
    MCR - 6
  </h2>
  <main className='flex flex-col my-1 sm:mt-0'>
   <h1 className="bg-rose-800 text-lime-200">I am main</h1>
  </main>

  <Footer/>
    </div>

  );
}

export default App;
