import React, { useState } from "react";

export default function Table(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && city.trim() !== "") {
      const val = {
        name,
        city,
      };
      props.func(val);
      clearState();
    }
  };
  const clearState = () => {
    setName("");
    setCity("");
  };
  return (
    <div className="container border border-1">
      <div className="my-2">
        {" "}
         <label className="fw-bold fs-4">Name :</label>
        <input
          className="form-control my-2"
          type="text"
          value={name}
          onChange={changeName}
        />
      </div>
      <div  className="my-2">
        {" "}
         <label className="fw-bold fs-4">City :</label>
        <input
          className="form-control my-2"
          type="text"
          value={city}
          onChange={changeCity}
        />
     
      </div>
      <button className="btn btn-warning my-2" onClick={transferValue}>
        {" "}
        Submit
      </button>
    </div>
  );
}
