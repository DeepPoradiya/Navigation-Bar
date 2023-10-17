import React, { useState } from "react";

export default function Textforms(props) {
  const texttoupper = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converted UpperCase succesfully", "success");
  };
  const texttolower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converted LowerCase succesfully", "success");
  };
  const texttochange = (event) => {
    settext(event.target.value);
  };
  const texttoclear = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Clear the all text", "success");
  };
  const texttoreverse = () => {
    let newtext = text.split("").reverse().join("");
    settext(newtext);
    props.showAlert("Reverse the text", "success");
  };
  const texttoremoveextrasapce = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  };

  const [text, settext] = useState("");
  return (
    <>
      {" "}
      <div
        className={`container rounded-3 p-3 my-3  bg-${props.mode}  text-${
          props.mode === "light" ? "dark" : "light"
        } border border-black border-3`}
      >
        <h1 className="heading">{props.heading}</h1>
        <div className="d-flex gap-3">
          <textarea
            onChange={texttochange}
            value={text}
            className="form-control border border-black border-3"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#CED4DA" : "light",
            }}
          ></textarea>
          <textarea
            onChange={texttochange}
            value={text}
            className="form-control border border-black border-3"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#CED4DA" : "light",
            }}
          ></textarea>
        </div>
        <div className=" bg-dark-subtle my-2 rounded-2 p-2 text-black border border-black border-2">
          <p className="fs-4 fw-bold">{text.length} Characters</p>
          <p className="fs-4 fw-bold">{text.split(" ").length} Words</p>
          <p className="fs-4 fw-bold">
            {0.008 * text.split(" ").length} minutes read
          </p>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <button
            className="btn btn-outline-primary my-2 "
            onClick={texttoupper}
          >
            Click To UppperCase
          </button>
          <button
            className="btn btn-outline-primary my-2"
            onClick={texttolower}
          >
            Click To LowerCase
          </button>
          <button
            className="btn btn-outline-primary my-2"
            onClick={texttoclear}
          >
            Click To Clear
          </button>
          <button
            className="btn btn-outline-primary my-2"
            onClick={texttoreverse}
          >
            Click To Reverse
          </button>
          <button
            className="btn btn-outline-primary my-2"
            onClick={texttoremoveextrasapce}
          >
            Click To Remove Extra Sapces
          </button>
        </div>
      </div>
    </>
  );
}
