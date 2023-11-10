import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Alldata() {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [dep, setDep] = useState([]);
  const [selectedDep, setSelectedDep] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
  // console.log(dep)
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const Alldata = () => {
    const filterUser = selectedDep
      ? userData.filter((user) => user.company.department.includes(selectedDep))
      : userData;
      const filteredUsersWithSearch = searchTerm.trim()
      ? filterUser.filter((user) => {
          const searchLower = searchTerm.toLowerCase();
          const idMatch = user.id.toString() === searchLower;
          const firstNameMatch = user.firstName.toLowerCase().includes(searchLower);
          const lastNameMatch = user.lastName.toLowerCase().includes(searchLower);
          
          return idMatch || firstNameMatch || lastNameMatch;
        })
      : filterUser;
    return (
      <>
        <div className="container my-4">
          <div className="row row-gap-4">
            {filteredUsersWithSearch.map((userData, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                  <div className="card shadow border border-0  bg-primary-subtle">
                    <div className="card-body  text-center">
                      <img
                        src={userData.image}
                        className="img-fluid "
                        alt="..."
                        style={{
                          borderRadius: "30rem",
                          background: "white",
                          boxShadow: "1px 0px 15px 1px black",
                        }}
                      />
                      <h5 className="card-title fw-bold  fs-3 text-capitalize my-3 py-2">
                        <span className=" p-2 rounded-2 ">
                          {userData.firstName} {userData.lastName}
                        </span>
                      </h5>
                      <button className="btn btn-dark">
                        <Link
                          className="nav-link"
                          to={`/Profile/${userData.id}`}
                        >
                          Click To View Profile
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        ;
      </>
    );
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
                      <button
                        className="dropdown-item"
                        onClick={() => setSelectedDep(deptartment)}
                      >
                        {deptartment}
                      </button>
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
                placeholder="Search By ID"
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </nav>
      {location.pathname === "/" ? Alldata() : null}
    </>
  );
}
