import { useState } from "react";

function TourList({ tours, removeTour }) {
  const { id, imagelink, nameofthetour, tourDescription } = tours;
  // implementing hooks
  const [showContent, setShowContent] = useState(true);
  return (
    <div className="TourStruct" key={id}>
      <img src={imagelink} alt={nameofthetour} />
      <title>{nameofthetour}</title>
      <p>
        {showContent ? tourDescription : tourDescription.slice(0, 100)}....
        <b onClick={() => setShowContent(!showContent)}>
          {showContent ? "See Less" : "Read More"}
        </b>
      </p>

      <button
        onClick={() => {
          //logic to remove the tour from list
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
}

export default TourList;
