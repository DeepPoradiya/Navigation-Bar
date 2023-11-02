import React, { useState, useEffect } from "react";
import Postitem from "./Postitem";
import { useParams, Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  // const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add state for search query

  const param = useParams();
  const id = param.id;

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

  useEffect(() => {
    async function fetchPost() {
      if (id) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const fetchPost = await response.json();
        setPost(fetchPost);
      } else {
        setPost(posts);
      }
    }
    fetchPost();
  }, [id, posts]);
  // useEffect(() => {
  //   // Step 4: Filter posts based on searchQuery
  //   const filteredPosts = posts.filter((item) =>
  //     item.username.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  //   setPost(filteredPosts);
  // }, [searchQuery,posts]);

  // const handleSearchInputChange = (event) => {
  //   // Step 2: Update the searchQuery state
  //   setSearchQuery(event.target.value);
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark  " data-bs-theme="dark">
        <div className="container-fluid">
          <Link target="_block" className="navbar-brand" to="/">
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
                    target="_blank
                    
                    "
                    className="nav-link"
                    to={`/page/${item.id}`}
                  >
                    {item.id}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <form>
              <input
                type="text"
                placeholder="Search by UserName"
                className="form-control"
                value={searchQuery} // Step 3: Bind value to the searchQuery state
                onChange={handleSearchInputChange} // Step 3: Add event handler
              />
            </form> */}
          </div>
        </div>
      </nav>
      <div className="container ">
        <h2 className="text-center text-danger fw-bold scroll-text py-3">
          Json Data Fetching
        </h2>
        <div className="row row-gap-4">
          {post.map((element, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <Postitem
                  id={element.id}
                  name={element.name}
                  username={element.username}
                  email={element.email}
                  address={element.address.city}
                  phone={element.phone}
                  website={element.website}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Post;
