import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />
      <h2>{destination.name}</h2>
      <p>{destination.location}</p>
      <p>{destination.description}</p>
      <strong>{destination.price}</strong>
    </div>
  );
};

export default DestinationCard;
