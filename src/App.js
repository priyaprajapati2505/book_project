import Greet from "./component/Title";
import "./styles.css";
import Message from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Greet name="Priya" />
      <Greet name="Good Morning" />
      <Greet name="Are you alright " />
      <Message />
    </div>
  );
}
