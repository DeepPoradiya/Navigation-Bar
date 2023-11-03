import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import Post from "./Allpages";

function Postitem() {
  const [post, setPost] = useState([]);
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    async function fetchPost() {
      if (id) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const fetchedPost = await response.json();
        setPost(fetchedPost);
      }
    }
    fetchPost();
  }, [id]);
  return (
    <>
      <Post />
      <div className="container ">
        <div className="row row-gap-4">
          {post.map((post, index) => {
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
                    </div>
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

export default Postitem;
