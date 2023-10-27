import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imgUrl, newsurl, author, date,source } = this.props;
    return (
      
      <div className="card mt-3 shadow">
        <div className="d-flex justify-content-end position-absolute end-0 ">
            <span className=" badge  bg-primary">
              {source}
            </span>
            </div>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://img.freepik.com/free-vector/breaking-news-information-concept_52683-36243.jpg?w=1060&t=st=1698224685~exp=1698225285~hmac=d82e88982def9dd97a6db0a59d41c4485c5f8e3397fb22bccb6f6a6c85152052"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title  fs-3">
            {title}{" "}
        
          </h5>
          <p className="card-text ">
            {description
              ? description
              : "this is  default description when nothing show on descriptipn"}
            ..
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
