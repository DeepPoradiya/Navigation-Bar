import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { grey, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../App.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Data() {
  const [data, setData] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products.slice(0, 20));
        setExpandedArray(Array(data.products.slice(0, 20).length).fill(false));
      });
  }, []);
  const handleExpandClick = (index) => {
    setExpandedArray((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="container my-5 ">
      <div className="row row-gap-4">
        {data.map((item, index) => {
          // if (index % 2 === 0) {
          return (
            <div className="col-lg-4 col-md-6 col-12 " key={index}>
              <Card sx={{ maxWidth: 345, bgcolor: grey[100] }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[300] }} aria-label="recipe">
                      D
                    </Avatar>
                  }
                  title={item.title}
                />
                <CardMedia
                  className=" object-fit-contain bg-white"
                  component="img"
                  height="194"
                  image={item.thumbnail}
                  alt="Paella dish"
                />
                <CardContent>
                  <div className="  text-primary"> {item.description} </div>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expandedArray[index]}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expandedArray[index]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={expandedArray[index]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <div className="fs-6">
                      PRICE: $
                      <span className="fw-bold text-success">{item.price}</span>
                    </div>
                    <hr />
                    <div className="fs-6 ">
                      RATING:{" "}
                      <span className="fw-bold text-danger">
                        {" "}
                        {item.rating}
                      </span>
                    </div>
                    <hr />
                    <div className="fs-6  ">
                      STOCK: <span className="fw-bold "> {item.stock}</span>
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
          // } else {
          //   return null;
          // }
        })}
      </div>
    </div>
  );
}
