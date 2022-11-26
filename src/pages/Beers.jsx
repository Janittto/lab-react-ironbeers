import { Link } from "react-router-dom"

const Beers = ({allBeers}) => {
    return (
        allBeers.map((element) => {
            return (
                <div className="item" key={element._id}>
                    <img src={element.image_url} alt={element.name}/>
                    <ul>   
                        <li><Link to={element._id}>{element.name}</Link></li>
                        <li><p>{element.tagline}</p></li>
                        <li><span><em>Created by :</em> {element.contributed_by}</span></li>
                    </ul> 
                </div>
            )
        })   
    )
}


export default Beers;