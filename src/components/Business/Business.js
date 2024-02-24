import React from "react";
import "./Business.css";
import "bootstrap/dist/css/bootstrap.min.css";

function renderStars(rating) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>); // &#9733; es el código HTML para una estrella
  }
  return stars;
}

function Business({ business }) {
  function renderStars(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); // &#9733; es el código HTML para una estrella
    }
    return stars;
  }

  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top business-image"
          src={business.image}
          alt={business.name}
        />
        <div className="card-body">
          <h4 className="card-title text-center">{business.name}</h4>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <p className="card-text">{business.address}</p>
                <p className="card-text">{business.city}</p>
                <p className="card-text">{business.state + " " + business.zipCode}</p>
              </div>
              <div className="col-4 text-end">
                <p className="card-text category">{business.category}</p>
                <p className="card-text rating">{business.rating}{renderStars(business.rating)}</p>
                <p className="card-text">{business.reviewCount + " reviews"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;