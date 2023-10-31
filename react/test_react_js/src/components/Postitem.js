import React from "react";

function Postitem(props) {

  return (
    <div>
      <div className="card bg-dark-subtle border border-0 shadow">
        <div className="card-body">
          <h5 className="card-title fw-bold border-bottom border-1 border-black  ">{props.id}.{props.name}</h5>
          <div className="card-text">
            <div className="row ">
                <div className="col-5 fw-bold">Username :</div>
                <div className="col ">{props.username}</div>
            </div>
            <div className="row">
                <div className="col-5 fw-bold">Email :</div>
                <div className="col text-break ">{props.email}</div>
            </div>
            <div className="row">
                <div className="col-5 fw-bold">Address :</div>
                <div className="col  ">{props.address}</div>
            </div>
            <div className="row">
                <div className="col-5 fw-bold">Phone :</div>
                <div className="col ">{props.phone}</div>
            </div>
            <div className="row">
                <div className="col-5 fw-bold">Website :</div>
                <div className="col ">{props.website}</div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Postitem;
