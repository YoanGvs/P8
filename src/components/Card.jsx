import React from "react"



function Card({ title, cover, id }) {
    const cardStyle = {
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`,
    };
  
    return (
      <div className="card" key={id} style={cardStyle}>
        <h2>{title}</h2>
      </div>
    );
  }
  
  export default Card;
  