import Cuisines from "../components/Cuisines";
import { useData } from "../context/dataContext";

export default function Landing() {
  const {cuisineData,cuisineDataToShow,selectedCuisineRestData, setCuisineDataToShow} =useData()
  
  const onClickHandler = (id)=>{
    const filteredData = selectedCuisineRestData(id);
    setCuisineDataToShow(filteredData)
  }

  return (
    <main className="flex flex-col my-1 sm:mt-0">
      <h1 className="bg-rose-500 p-2 text-lime-200">Food Ordering App</h1>
      <h3>Select Your Cuisine</h3>
      <div className="flex flex-row justify-around ">
          {
           cuisineData?.map(item=><button onClick={()=>{onClickHandler(item.id)}} className="bg-rose-500 text-white p-2 ">{item.name}</button>)
      }
      </div>
   <div className="flex flex-col">
    {cuisineDataToShow?.map(item=><Cuisines data={item}/>)
    }
   </div>
    </main>
  );
}
