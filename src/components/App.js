import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListings] = useState([]);
  const[currentSearch, setSearch] = useState('')
  

  
  function handleSearch(search){
    setSearch(search)   
 
 }
  
 
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {
        setListings(data);
      });
  },[]);

  return (
    <div  className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer currentSearch={currentSearch} listing={listing} setListings={setListings}/>
    </div>
  );
}

export default App;
