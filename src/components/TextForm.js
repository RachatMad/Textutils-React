import React, { useState } from "react";


export default function TextForm(props) {



  const handleUpClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success")
  }

  const handleloClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success")
  }

  const handleclearClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared!","success")
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!","success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("space cleared!","success")
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}} >
        <h1 >{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } } id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleUpClick} disabled={text.length===0}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1 "  onClick={handleloClick} disabled={text.length===0}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleclearClick} disabled={text.length===0}>clear</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} disabled={text.length===0}>copy text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} disabled={text.length===0}>space remover</button>

      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Min required to read this words</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
  
}

