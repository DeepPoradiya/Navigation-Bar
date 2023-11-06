import React, { useState, useEffect } from "react";
// import {  useLocation } from "react-router-dom";
export default function Alldata() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => setUserData(data.users))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  return (
    <>
      <div className="container my-4">
        <div className="row row-gap-4">
          {userData.map((userData, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div className="card shadow border border-0" >
                  <img src={userData.image} className="card-img-top " alt="..." />
                  <div className="card-body  text-center">
                    <h5 className="card-title fw-bold  fs-4">{userData.username}</h5>
                    <button className="btn btn-success ">Click To View Profile</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
