import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const [donateItems, setDonateItem] = useState({});

  const { data } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findDonate = data.find((donate) => donate.id == id);
    setDonateItem(findDonate);
  }, [id, data]);

  const handleDonate = () => {
    const donateAdded = [];
    const donateItem = JSON.parse(localStorage.getItem("donates"));
    if (!donateItem) {
      donateAdded.push(donateItems);
      localStorage.setItem("donates", JSON.stringify(donateAdded));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Donation Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const isExist = donateItem.find((donation) => donation.id == id);

      // console.log(!isExist);

      if (!isExist) {
        donateAdded.push(...donateItem, donateItems);
        localStorage.setItem("donates", JSON.stringify(donateAdded));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Donation Success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Already Donated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div className="w-full rounded-xl  rounded-lg relative ">
        <img
          src={donateItems.picture}
          alt=""
          className="w-full object-cover h-[65vh] rounded-xl"
        />
        <div className="p-5 w-full absolute rounded-b-xl  bottom-0 bg-[#0B0B0B80]">
          <button
            onClick={handleDonate}
            style={{ backgroundColor: donateItems.text_button_bg }}
            className=" text-white md:py-3 px-4 md:px-5 py-3 rounded-md font-semibold md:text-xl text-base "
          >
            Donate $ {donateItems.price}
          </button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="md:text-4xl text-2xl text-[#0B0B0B] font-bold">
          {donateItems.title}
        </h2>
        <p className="text-[#0B0B0BB2] text-justify leading-loose	 mt-6">
          {donateItems.description}
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
