import React from 'react';
import '../styles/testimony.css';

function Testimony(props) {
  return (
    <div className="testimony-container">

      <img
        className="testimony-img"
        src={require(`../images/testimony-${props.whoImg}.png`)}
        alt={`${props.name} photo`} />

      <div className="testimony-all-text-container">
        <p className="testimony-name"><strong>{props.name}</strong> in {props.country}</p>
        <p className="testimony-position">{props.position} at <strong>{props.company}</strong></p>
        <p className="testimony-description">"{props.description}"</p>
      </div>

    </div>
  )
}

export default Testimony;
