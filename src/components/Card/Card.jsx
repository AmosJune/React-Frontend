import React from "react";
import './Card.css'

function Card({name,quote,description, link,s_id}){
    // console.log(isLogged)
    function handleClick(e){
        e.preventDefault();
            fetch('https://iquotes-app.herokuapp.com/quotes',{
            method:"POST",
            headers:{
                "Content_Type" : "application/json"
            },
            body: JSON.stringify({"quotes_id":s_id})
            })
            .then(r => r.json())
            .then(data => console.log(data))
    }
    return(
        <div className="quotes">
            <h2>{name}</h2>
            <h3> Quote: {quote}</h3>
            <p className="description">{description}</p>

            <div id="btns" className="buttons">
                <a href={link} target="_blank" rel="noreferrer">Edit</a>
                <p className="btns" onClick={handleClick}>Save</p>
            </div>
        </div>
    )
}

export default Card