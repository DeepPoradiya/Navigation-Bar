import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Alldata() {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [dep, setDep] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const deps = userData.map((userData) => userData.company.department);
    const uniqdep = [...new Set(deps.flat())];
    setDep(uniqdep);
  }, [userData]);

  const Alldata = () => {
    return(
      <>
    <div className="container my-4">
      <div className="row row-gap-4">
        {userData.map((userData, index) => {
          return (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="card shadow border border-0">
                <img src={userData.image} className="card-img-top " alt="..." />
                <div className="card-body  text-center">
                  <h5 className="card-title fw-bold  fs-4">
                    {userData.username}
                  </h5>
                  <button className="btn btn-primary">
                    <Link
                      className="nav-link"
                      to={`/Profile/${userData.id}`}
                    >
                      Click TO View Profile
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>;
   </>
    )
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="/">
            Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Department
                </a>
                <ul className="dropdown-menu">
                  {dep.map((deptartment, index) => (
                    <li key={index}>
                      <Link
                        className="dropdown-item"
                        path=":department"
                        to={`/${deptartment.department}`}
                      >
                        {deptartment}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      {location.pathname === "/" ? Alldata() : null}
    </>
  );
}
