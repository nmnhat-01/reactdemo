import React from "react";
import "./Card.css"

//functional stateless component

function Card2(props) {
    const { imageUrl, children } = props;
    return (
        <div className="card">
            <img
                className="card-cover" 
                src={imageUrl}
                alt=""
            />
            <div className="card-body">{children}</div>
        </div>
    )
}

export default Card2;