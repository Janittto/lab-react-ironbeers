import React, { useState } from "react"
import axios from "axios"

const NewBeer = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        tagline : "",
        description : "",
        first_brewed : "",
        brewers_tips : "",
        attenuation_level :"",
        contributed_by : "",
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        // setAllBeers((currentState) => {
        //   const copy = [...currentState];
        //   copy.push(formData);
        //   console.log(copy)
        //   return copy;
        // })

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
        .then((response) => console.log(response))
        setFormData({
          name: "",
          tagline : "",
          description : "",
          first_brewed : "",
          brewers_tips : "",
          attenuation_level :"",
          contributed_by : "",
      })
        .catch((err) => {
          console.error(err)
        })
    
      }
    
      const { 
        name, 
        tagline, 
        description, 
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by 
    } = formData;

	return (
  <div className="new">
    <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input value={name} type="text" onChange={({ target: { value } }) => { setFormData({ ...formData, name: value }) }} />

        <label>Tagline</label>
        <input value={tagline} type="text" onChange={(e) => { setFormData({ ...formData, tagline: e.target.value }) }} />

        <label>Description</label>
        <input value={description} type="textarea" onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} />

        <label>First Brewed</label>
        <input value={first_brewed} type="text" onChange={(e) => { setFormData({ ...formData, first_brewed: e.target.value }) }} />

        <label>Brewers Tips</label>
        <input value={brewers_tips} type="text" onChange={(e) => { setFormData({ ...formData, brewers_tips: e.target.value }) }} />

        <label>Attenuation Level</label>
        <input value={attenuation_level} type="number" onChange={(e) => { setFormData({ ...formData, attenuation_level : e.target.value }) }} />

        <label>Contributed by</label>
        <input value={contributed_by} type="text" onChange={(e) => { setFormData({ ...formData, contributed_by : e.target.value }) }} />

        <button type="submit">Create</button>
      </form>
    </div>
	)
}

export default NewBeer
