import { Container } from "react-bootstrap";

import GalleryComponent1 from "./GalleryComponent1";
import GalleryComponent2 from "./GalleryComponent2";
import GalleryComponent3 from "./GalleryComponent3";
import { FilmsGallery, TvShow } from "./TvShow";

const MyMain = () => {
  return (
    <Container fluid>
      <TvShow />
      <FilmsGallery>
        <GalleryComponent1 />
      </FilmsGallery>
      <FilmsGallery>
        <GalleryComponent2 />
      </FilmsGallery>
      <FilmsGallery>
        <GalleryComponent3 />
      </FilmsGallery>
    </Container>
  );
};

export default MyMain;
