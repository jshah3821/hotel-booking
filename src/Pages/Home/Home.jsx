import React from "react";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";
import TextSlider from "../../components/TextSlider";
import "./Home.css";
import Section4Item from "./Section4Item";
import { useEffect } from "react";
import ImgWithLoader from "../../components/ImgWithLoader";

const imagesSection4 = [
  { width: "350", height: "600", category: "Double Room" },
  { width: "350", height: "600", category: "Double Room" },
  { width: "350", height: "600", category: "Double Room" },
  { width: "350", height: "600", category: "Double Room" },
];

const Home = () => {
  useEffect(() => {
    console.log("effect called");
    const script = document.createElement("script");
    script.src =
      "//www.opentable.com/widget/reservation/loader?rid=108955&type=button&theme=standard&color=1&iframe=true&domain=com&lang=en-US&newtab=true&ot_source=Restaurant%20website";
    script.async = true;
    // if (!document.getElementById("openTable").firstChild(script)) {
    document.getElementById("openTable").appendChild(script);
    // }

    return () => {
      // document.getElementById("openTable").removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="section1">
        <div className="slider">
          <Slider />
        </div>
        <div className="s1__container">
          <div className="text_block">
            <p style={{ fontSize: "5vw" }}>Sona A Luxury Hotel</p>
            <p>
              Here are the best hotel booking sites, including recommendations
              for international travel and for finding low-priced hotel rooms.
            </p>
            <button className="btn_discover">Discover Now</button>
          </div>
          <Modal title={"Booking Your Hotel"} />
        </div>
      </div>
      <div className="openTable">
        <div id="openTable"></div>
        <div>
          <ImgWithLoader height="400" width="370" />
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 about">
              <div className="about-text">
                <div className="section2-title">
                  <span>About Us</span>
                  <h1>
                    Intercontinental LA <br />
                    Westlake Hotel
                  </h1>
                </div>
                <p className="text-center">
                  Sona.com is a leading online accommodation site. We’re
                  passionate about travel. Every day, we inspire and reach
                  millions of travelers across 90 local websites in 41
                  languages.
                </p>
                <p className="text-center">
                  So when it comes to booking the perfect hotel, vacation
                  rental, resort, apartment, guest house, or tree house, we’ve
                  got you covered.
                </p>
                <button className="btn_readmore">Read More</button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="about-pic">
                <div className="row">
                  <div className="col-sm-12 col-lg-6 s2_img_container mb-3">
                    <ImgWithLoader width="260" height="372" />
                  </div>
                  <div className="col-sm-12 col-lg-6 s2_img_container mb-3">
                    <ImgWithLoader width="260" height="372" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-lg-12">
                <div className="section3-title">
                  <span>What We Do</span>
                  <h1>Discover Our Services</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <h4>Travel Plan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-033-dinner"></i>
                <h4>Catering Service</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-026-bed"></i>
                <h4>Babysitting</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-024-towel"></i>
                <h4>Laundry</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-044-clock-1"></i>
                <h4>Hire Driver</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-012-cocktail"></i>
                <h4>Bar &amp; Drink</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4_items">
          {imagesSection4.map((item, index) => {
            return <Section4Item item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="section5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section3-title">
                <span>Testimonials</span>
                <h1>What Customers Say?</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <TextSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
