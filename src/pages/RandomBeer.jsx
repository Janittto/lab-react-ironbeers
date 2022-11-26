import React, { useEffect, useState } from "react"
import axios from "axios"

const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState(null)
    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
			.then(({ data }) => {
				setRandomBeer(data)
			})
			.catch((err) => {
				console.error(err)
			})
    },[])
	
    if (!randomBeer) {
		return <div className="loading">Loading....</div>
	}

  return (
    <div className="one-beer-item">
        <img src={randomBeer.image_url} alt={randomBeer.name}/>
                <div className="infos">
                    <ul className="presentation-infos">
                        <li>{randomBeer.name}</li>
                        <li>{randomBeer.tagline}</li>
                    </ul>
                    <ul className="creation-infos">
                        <li>{randomBeer.first_brewed}</li>
                        <li>{randomBeer.attenuation_level}</li>
                    </ul>
                </div>
            <p>{randomBeer.description}</p>
            <span>{randomBeer.contributed_by}</span>
    </div>
  )
}

export default RandomBeer