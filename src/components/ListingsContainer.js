import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {

  const listingItems = listings.map((listing) => {
    return ( <ListingCard 
      key={listing.id}
      listing={listing}
      deleteListing={deleteListing}
    />)
  })
  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
