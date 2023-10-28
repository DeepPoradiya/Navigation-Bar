import React from "react";

export default function Post(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
         {props.firstName}
          </p>
          <p className="card-text">
         {props.lastName}
          </p>
        </div>
      </div>
    </>
  );
}
