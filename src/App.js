import Greet from "./component/Title";
import "./styles.css";
import Welcome from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Greet name="Priya" />
      <Greet name="D" />
      <Greet name="Prajapati" />
      <Welcome />
    </div>
  );
}
