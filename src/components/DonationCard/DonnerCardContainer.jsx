import React, { useState } from "react";
import DonationCard from "./DonationCard";

const DonnerCardContainer = ({ donated }) => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const handleSeeMore = () => {};

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
        {isSeeMore
          ? donated.map((donate) => (
              <DonationCard key={donate.id} donate={donate} />
            ))
          : donated
              .slice(0, 4)
              .map((donate) => (
                <DonationCard key={donate.id} donate={donate} />
              ))}
      </div>
      {donated.length > 4 && (
        <button
          onClick={() => setIsSeeMore(!isSeeMore)}
          className="btn text-white rounded-md block mx-auto bg-purple-700 px-3 py-3"
        >
          {isSeeMore ? <p>Hide</p> : <p>See more</p> }
        </button>
      )}
    </>
  );
};

export default DonnerCardContainer;
