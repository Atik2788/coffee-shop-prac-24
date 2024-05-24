import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  // console.log(coffees);

  return (
    <div className="m-20 text-center">
      <h1 className="text-6xl text-purple-600 mb-20">Hot Hot Cold Coffee</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
