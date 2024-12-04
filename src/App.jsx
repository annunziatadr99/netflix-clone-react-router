import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyMain from "./Components/MyMain";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="bg-dark text-light">
      <MyNav />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
