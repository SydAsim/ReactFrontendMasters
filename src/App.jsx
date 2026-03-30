import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import Order from "./Order";
// const Pizza = (props)=>{
//     return React.createElement("div" , {} , ([
//         React.createElement("h1",{},props.name),
//         React.createElement("p",{}, props.description)
//     ])
        
//     )
// }

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      {/* <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image={"/public/pizzas/big_meat.webp"}
      /> */}


      <Order/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);