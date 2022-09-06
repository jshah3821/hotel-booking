import React, { useState } from "react";
import Card from "../../components/Card";
import "./Rooms.css";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";

const Rooms = () => {
  const [pageContent, setPageContent] = useState([[]]);
  const [selectedPage, setSelectedPage] = useState(1);
  const roomSpecifications = [
    {
      imgSrc: "https://picsum.photos/320/270?random=1",
      category: "Premium Room",
      price: 199,
      capacity: 3,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=2",
      category: "Deluxe Room",
      price: 299,
      capacity: 2,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=3",
      category: "Double Room",
      price: 399,
      capacity: 5,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=4",
      category: "Luxury Room",
      price: 299,
      capacity: 4,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=5",
      category: "Room With View",
      price: 199,
      capacity: 2,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=6",
      category: "Small View",
      price: 399,
      capacity: 4,
    },
    {
      imgSrc: "https://picsum.photos/320/270?random=7",
      category: "Premium Room",
      price: 199,
      capacity: 3,
    },
  ];
  return (
    <>
      <PageTitle title={"Our Rooms"} page={"Rooms"} />
      <div className="rooms_page">
        {pageContent[0].map((data, index) => {
          return (
            <Card
              data={data}
              key={index}
              imgSrc={data.imgSrc}
              category={data.category}
              price={data.price}
              capacity={data.capacity}
            />
          );
        })}
      </div>
      <Pagination
        roomSpecifications={roomSpecifications}
        pageContent={pageContent}
        setPageContent={setPageContent}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

export default Rooms;
