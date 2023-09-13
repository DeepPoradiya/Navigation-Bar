import React,{useState} from "react";

export default function Textforms(props) {
    const texttoupper=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const texttochange=(event)=>{
        settext(event.target.value);
      
    }
    const [text,settext]=useState("enter text here");
  return (
   
      <div class="mb-3 container my-3">
        <h1 className="heading">{props.title}</h1>
        <textarea
        onChange={texttochange}
        value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-outline-danger my-2" onClick={texttoupper}>Click To UppperCase</button>
      </div>
  );
}
