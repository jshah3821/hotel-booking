import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel fade={true} interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1440/800?random=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1440/800?random=2"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1440/800?random=3"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
