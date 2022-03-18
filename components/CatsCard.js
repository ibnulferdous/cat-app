import React from "react";
import { useRouter } from "next/router";

const CatsCard = ({ name, phone, email, image, id }) => {
  const router = useRouter();

  return (
    <div className="col">
      <div
        className="card h-100 cat-card"
        onClick={() => router.push(`/cats/${id}`)}
      >
        <img src={image.url} className="card-img-top" alt={image.alt} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">{phone}</p>
          <p className="card-text">{email}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatsCard;
