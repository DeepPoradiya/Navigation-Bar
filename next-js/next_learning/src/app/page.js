"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import Navbar from '../../pages/Navbar';
import Link from "next/link";

export default function Home() {
  const [name, setname] = useState("React-Js");
  const changetext = () => {
    setname("Next-Js");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary">
                <Link href="/login" className="nav-link active">
                  login
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <Navbar/> */}
      <div className="container bg-body-secondary p-5 mt-5">
        <div class="mb-3">
          <h1>hello this is my first program! {name}</h1>
          <button className="btn btn-primary" onClick={() => changetext()}>
            click
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}
