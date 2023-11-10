import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchPosts = await response.json();
      setPosts(fetchPosts);
    }
    fetchPosts();
  }, []);
  const Allpost = () => {
    return (
      <div className="container my-4">
        <div className="row row-gap-4">
       
          {posts.map((post, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card bg-dark-subtle border border-0 shadow">
                  <div className="card-body bg-primary-subtle">
                    <h5 className="card-title fw-bold border border-1 rounded-pill text-center border-primary fs-4 text-primary p-2 bg-light">
                      {post.id}.{post.name}
                    </h5>
                    <div className="card-text">
                      <div className="row my-3 ">
                        <div className="col-4 fw-bold">UserName </div>
                        <div className="col-1 fw-bold"> :</div>
                        <div className="col  ">{post.username}</div>
                      </div>
                      <div className="row my-3 ">
                        <div className="col-4 fw-bold">Email </div>
                        <div className="col-1 fw-bold"> :</div>
                        <div className="col  ">{post.email}</div>
                      </div>
                      <div className="row my-3 ">
                        <div className="col-4 fw-bold">Address </div>
                        <div className="col-1 fw-bold"> :</div>
                        <div className="col  ">{post.address.city}</div>
                      </div>
                      <div className="row my-3 ">
                        <div className="col-4 fw-bold">Phone </div>
                        <div className="col-1 fw-bold"> :</div>
                        <div className="col  ">{post.phone}</div>
                      </div>
                      <div className="row my-3 ">
                        <div className="col-4 fw-bold">Website </div>
                        <div className="col-1 fw-bold"> :</div>
                        <div className="col  ">{post.website}</div>
                      </div>
                      {/* Add other card details as needed */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <>
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
              {posts.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link
                    target="_blank"
                    className="nav-link"
                    to={`/Page/${item.id}`}
                  >
                    {item.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <h2 className="text-center text-danger fw-bold scroll-text py-3">
            Json Data Fetching
          </h2>
      {location.pathname === "/" ? Allpost() : null}
    </>
  );
}
export default Post;
