import "./App.css";
import React, { useEffect, useState } from "react"
import axios from "axios"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
// import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import OneBeer from "./pages/OneBeer";
import Layout from "./components/Layout"
import NewBeer from "./pages/NewBeer";


function App() {
  const [allBeers, setAllBeers] = useState(null)
    
    useEffect(() => {
        axios
        .get(" https://ih-beers-api2.herokuapp.com/beers")
			.then(({ data }) => {
				setAllBeers(data)
        //console.log(allBeers)
			})
			.catch((err) => {
				console.error(err)
			})
    },[])
	
    if (!allBeers) {
		return <div className="loading">Loading....</div>
	}
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path=""  element={<Layout />}>
          <Route path="/beers" element={<Beers allBeers={allBeers}/>}/>
          <Route path="/beers/:id" element={<OneBeer allBeers={allBeers}/>}/>
          <Route path="/random-beer" element={<RandomBeer />}/>
          <Route path="/new-beer" element={<NewBeer setAllBeers={setAllBeers} />}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
