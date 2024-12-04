import { FilmsGallery } from "./Components/Title";
import GalleryComponent1 from "./Components/GalleryComponent1";
import GalleryComponent2 from "./Components/GalleryComponent2";
import GalleryComponent3 from "./Components/GalleryComponent3";
import { TvShow } from "./TvShow";
const App = () => {
  return (
    <div>
      <TvShow />
      <FilmsGallery>
        <GalleryComponent1 />
        <GalleryComponent2 />
        <GalleryComponent3 />
      </FilmsGallery>
    </div>
  );
};
export default App;
