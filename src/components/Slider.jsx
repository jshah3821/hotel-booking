import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { img3, img4, img5 } from "../Utils/Utils";

const Slider = () => {
  return (
    <>
      <Carousel fade={true} interval={2000} pause={false}>
        <Carousel.Item>
          <img height="100%" className="d-block" src={img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="100%"
            className="d-block"
            src={img3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img height="100%" className="d-block" src={img4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
