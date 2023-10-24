import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
  

    let {title,description,imgUrl,newsurl}=this.props;
    return (
        <div className="card mt-3 shadow" >
          <img src={imgUrl?imgUrl:"https://i.gadgets360cdn.com/large/RS-Q19YNZE-split-ac-bottom-perspective-view-DZ-07_1_1697108540939.jpg"} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title  fs-3">{title}</h5>
            <p className="card-text ">
            {description?description:"this is  default description when nothing show on descriptipn"}..
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
