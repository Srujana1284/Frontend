// functional component

import Home from "./Home";
import About from "./About";
import Homeclass from "./Classcomponent/homeclass";
import Contactclass from "./Classcomponent/Contactclass";
import Greeting from "./Greeting";

function App() {
  let name = "Srujana";
  let age = 22;
  return (
    <div>
      <h1>Hello Everyone </h1>
    <h5>Welcome to React!!</h5>
      <Home />
      <Homeclass />
      <About />
      <Contactclass />
      <Greeting fn={name} age={age} favcolor="Blue"/>
    </div>
  )
}

export default App;
