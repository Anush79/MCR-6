import Cuisines from "../components/Cuisines";
import { useData } from "../context/dataContext";

export default function Landing() {
  const {
    cuisineData,
    cuisineDataToShow,
    selectedCuisineRestData,
    setCuisineDataToShow,
    loggedInUserData
  } = useData();

  const onClickHandler = (id) => {
    const filteredData = selectedCuisineRestData(id);
    setCuisineDataToShow(filteredData);
  };

  return (
    <main className="flex flex-col my-1  sm:mt-0">
      <header className="flex justify-between p-2 sticky top-0 bg-rose-500 text-white">
        <p className="text-xl font-bold ">FOOD <span className="text-4xl">.</span></p>
      <img title={loggedInUserData?.userName} src={loggedInUserData.profileAvatar} alt={loggedInUserData.userName}  className="w-12 hover:bg-sky-900 "/>
      </header>
      <section className="flex flex-col justify-center items-center">
        <h1 className="p-2 text-3xl font-bold">Food Ordering App</h1>
      <h3 className="text-xl font-bold my-4">Select Your Cuisine: </h3>
      <div className="flex flex-row justify-around w-1/3  ">
        {cuisineData?.map((item) => (
          <button
            onClick={() => {
              onClickHandler(item.id);
            }}
            className="bg-rose-500 text-white p-2 px-4 rounded-md "
          >
            {item.name}
          </button>
        ))}
      </div>
      </section>
      
      <div className="flex flex-col w-screen">
        {cuisineDataToShow?.map((item) => (
          <Cuisines data={item} />
        ))}
      </div>
    </main>
  );
}
