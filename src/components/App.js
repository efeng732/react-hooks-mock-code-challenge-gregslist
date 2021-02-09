import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {useState, useEffect} from "react";

function App() {
  const[listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listingArray => setListings(listingArray))
  }, [])

  function deleteListing (deletedId) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedId)
    setListings(updatedListings)
  }

  const displayedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer deleteListing={deleteListing} listings={displayedListings} />
    </div>
  );
}

export default App;
