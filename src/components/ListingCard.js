import React, { useState } from "react";

function ListingCard({id, image, description, location, deleteListing,listing}) {
  const [star, setStar] = useState("false")

function handleDelete() {
  deleteListing(id)
}
  function onStarClick() {
setStar(star => !star)
}



  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={onStarClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onStarClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
