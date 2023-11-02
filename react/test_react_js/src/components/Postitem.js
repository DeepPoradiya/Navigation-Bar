import React from "react";

function Postitem(props) {
  return (
    <div>
      <div className="card bg-dark-subtle border border-0 shadow">
        <div className="card-body bg-primary-subtle">
          <h5 className="card-title fw-bold border border-1 rounded-pill text-center border-primary fs-4 text-primary p-2 bg-light">
            {props.id}.{props.name}
          </h5>
          <div className="card-text">
            <div className="row my-3 ">
              <div className="col-4 fw-bold">UserName </div>
              <div className="col-1 fw-bold"> :</div>
              <div className="col  ">{props.username}</div>
            </div>
            <div className="row my-3">
              <div className="col-4 fw-bold">Email </div>
              <div className="col-1 fw-bold"> :</div>
              <div className="col text-break ">{props.email}</div>
            </div>
            <div className="row my-3">
              <div className="col-4 fw-bold">Address </div>
              <div className="col-1 fw-bold"> :</div>
              <div className="col ">{props.address}</div>
            </div>
            <div className="row my-3">
              <div className="col-4 fw-bold">Phone </div>
              <div className="col-1 fw-bold"> :</div>
              <div className="col text-danger fw-bold" >{props.phone}</div>
            </div>
            <div className="row my-3">
              <div className="col-4 fw-bold">Website </div>
              <div className="col-1 fw-bold"> :</div>
              <div className="col ">{props.website}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postitem;
