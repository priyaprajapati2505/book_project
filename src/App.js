import { enableRipple } from "@syncfusion/ej2-base";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useState } from "react";
import * as ReactDom from "react-dom";
import Home from "./pages/Home";
import About from "./component/About";
import "./App.css";
import Loginpage from "./pages/Loginpage";

enableRipple(true);

function App() {
  return <ButtonComponent>Button</ButtonComponent>;
}
return (
<div className="App">
{
  /* <p>This is App Page</p> */
}
{
  /* <button onClick ={()=>setToggle(!toggle)}>Change Button</button> */
}
{
  /* {toggle ? <Home /> : <About />} */
}
 <Loginpage />
 </div>
 );
}
export default App;
ReactDom.render(<App />, document.getElementById("button"));
