import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
  render(){
    const { imageUrl, children } = this.props;
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
}

export default Card;