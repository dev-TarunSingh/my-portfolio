import React from 'react';
import './CardStack.css';

export default function MultiActionAreaCard({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
}