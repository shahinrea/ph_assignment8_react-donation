import React, { useState } from "react";
import { Link, json, useParams } from "react-router-dom";

const HomeCard = ({ donate }) => {
  const [donated, setDonated] = useState([]);

  const {
    title,
    card_bg,
    category,
    category_bg,
    id,
    description,
    picture,
    price,
    text_button_bg,
  } = donate;
  
  // console.log(donate);
  // const handleDonate = () => {
  //   const donateAdded = [];
  //   const donateItem = JSON.parse(localStorage.getItem("donates"));
  //   if (!donateItem) {
  //     donateAdded.push(donate);
  //     localStorage.setItem("donates", JSON.stringify(donateAdded));
  //     alert("Item added successfully");
  //   } else {
  //     const isExist = donateItem.find((donation) => donation.id === id);

  //     if (!isExist) {
  //       donateAdded.push(...donateItem, donate);
  //       localStorage.setItem("donates", JSON.stringify(donateAdded));
  //       alert("Added item");
  //     } else {
  //       alert("sorry already added this item");
  //     }
  //   }
  // };

  return (
    <Link to={`/donation/${id}`}>
      <div
        // onClick={() => handleDonate()}
        style={{ backgroundColor: card_bg }}
        className={` rounded-lg cursor-pointer`}
      >
        <img className="w-full" src={picture} alt="" />
        <div className="p-4 space-y-3">
          <span
            style={{ backgroundColor: category_bg, color: text_button_bg }}
            className="text-[#0052FF] px-4 py-1 font-medium text-sm rounded-md "
          >
            {category}
          </span>
          <p style={{ color: text_button_bg }} className=" font-bold text-xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
