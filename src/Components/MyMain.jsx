import { Container } from "react-bootstrap";

import Title from "./Title";
import GalleryComponent2 from "./GalleryComponent2";
import GalleryComponent1 from "./GalleryComponent1";
import GalleryComponent3 from "./GalleryComponent3";

const MyMain = () => {
  return (
    <Container fluid>
      <Title />
      <GalleryComponent1 />
      <GalleryComponent2 />
      <GalleryComponent3 />
    </Container>
  );
};

export default MyMain;
