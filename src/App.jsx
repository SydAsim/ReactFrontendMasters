
import {createRoot} from "react-dom/client"
import Pizza from "./Pizza"
// const Pizza = (props)=>{
//     return React.createElement("div" , {} , ([
//         React.createElement("h1",{},props.name),
//         React.createElement("p",{}, props.description)

//     ])
        
//     )
// }



const App = ()=>{
  return(
    <div>

    
    <h1>
        Pizza Pepporoni
    </h1>
    <Pizza name="italiano special" description="meat and vegetable"/>
  </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)