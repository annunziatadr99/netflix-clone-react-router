import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyMain from "./Components/MyMain";
import MyFooter from "./Components/MyFooter";

import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TvShow } from "./Components/TvShow";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark text-light">
        <MyNav />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/tv-shows" element={<TvShow />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}
export default App;
