import React,{useState} from "react";

export default function Textforms(props) {
    const texttoupper=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const texttolower=()=>{
      let newtext=text.toLowerCase();
      settext(newtext);
  }
    const texttochange=(event)=>{
        settext(event.target.value);
      
    }
    const texttoclear=()=>{
      let newtext='';
      settext(newtext);
  }
  const texttoreverse = () => {
    let newtext = text.split("").reverse().join("");
    settext(newtext);
  };
  const texttoremoveextrasapce = () => {
    let newtext = text.split(/[ ]+/);;
    settext(newtext.join(" "));
  };
    

    const [text,settext]=useState("");
  return (
   <>      <div className={`container rounded-3 p-3 my-3  bg-${props.mode}  text-${props.mode==='light'?'dark':'light'}` }>
        <h1 className="heading">{props.title}</h1>
       <div className="d-flex gap-3">
       <textarea
        onChange={texttochange}
        value={text}
          className="form-control border border-black border-3"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
               <textarea
        onChange={texttochange}
        value={text}
          className="form-control border border-black border-3"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
       </div>
        <div className=" bg-dark-subtle my-2 rounded-2 p-2 text-black border border-black border-2">
          <p className="fs-4 fw-bold">{text.length} Characters</p>
          <p className="fs-4 fw-bold">{text.split(" ").length} Words</p>
          <p className="fs-4 fw-bold">{0.008 * text.split(" ").length} minutes read</p>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        <button className="btn btn-outline-primary my-2 " onClick={texttoupper}>Click To UppperCase</button>
        <button className="btn btn-outline-primary my-2" onClick={texttolower}>Click To LowerCase</button>
        <button className="btn btn-outline-primary my-2" onClick={texttoclear}>Click To Clear</button>
        <button className="btn btn-outline-primary my-2" onClick={texttoreverse}>Click To Reverse</button>
        <button className="btn btn-outline-primary my-2" onClick={texttoremoveextrasapce}>Click To Remove Extra Sapces</button>

        </div>
      </div>
      
      </>
  );
}
