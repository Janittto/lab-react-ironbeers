import { Link } from "react-router-dom";
import React from "react"
import beersImage from"./../assets/beers.png";
import randomBeerImage from"./../assets/random-beer.png";
import newImage from"./../assets/new-beer.png";

const Home = () => {
  return (
    <div className="home flex-section">
      <section>
        <img src={beersImage} alt="beers"></img>
        <Link to="/beers">
          All Beers
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section> 
      <section>
        <img src={randomBeerImage} alt="random-beer"></img>
        <Link to="/random-beer">
          Random Beer
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section> 
      <section>
        <img src={newImage} alt="new-beer"></img>
        <Link to="/new-beer">
          New Beer
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section> 
    </div>
  );
};

export default Home;
