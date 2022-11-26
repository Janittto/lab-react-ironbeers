import { useParams } from "react-router-dom"

const OneBeer = ({allBeers}) => {
	const params = useParams()
	const id = params.id
    const findBeer = allBeers.find((element) => element._id === id)

	return (
        <div className="one-beer-item">
            <img src={findBeer.image_url} alt={findBeer.name}/>
                <div className="infos">
                    <ul className="presentation-infos">
                        <li>{findBeer.name}</li>
                        <li>{findBeer.tagline}</li>
                    </ul>
                    <ul className="creation-infos">
                        <li>{findBeer.first_brewed}</li>
                        <li>{findBeer.attenuation_level}</li>
                    </ul>
                </div>
            <p>{findBeer.description}</p>
            <span>{findBeer.contributed_by}</span>
        </div>
	)
}

export default OneBeer
