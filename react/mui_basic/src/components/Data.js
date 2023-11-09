import React, { useEffect, useState } from "react";
import "../App.css";
export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data.products.slice(0, 20)))
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row row-gap-4">
          {data.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                  <div className="card bg-dark-subtle shadow border border-0">
                    <img
                      src={data.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Brand : {data.brand}</h5>

                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">
                        Price :<span className="fw-bold"> ${data.price}</span>
                      </p>
                      <p className="card-text">{data.description}</p>
                      
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}
