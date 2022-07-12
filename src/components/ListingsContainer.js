import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, setListings, currentSearch }) {
  function handleListingDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => {
        const deleteListing = listing.filter(l => l.id !== id);
        setListings(deleteListing);
      });
  }

  const handleSearch = listing.filter(list => {
    return list.description.toLowerCase().includes(currentSearch.toLowerCase())
  });



  return (
    <main>
      <ul className="cards">
        {handleSearch.map(listingg => (
          <ListingCard
            listing={listing}
            deleteListing={handleListingDelete}
            key={listingg.id}
            id={listingg.id}
            image={listingg.image}
            description={listingg.description}
            location={listingg.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
