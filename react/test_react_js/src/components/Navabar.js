import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-dark  " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Test
          </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                ></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/1">
                  1{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/2">
                  2{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/3">
                  3{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/4">
                  4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/5">
                  5
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/6">
                  6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/7">
                  7
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  8
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  9
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  10
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
