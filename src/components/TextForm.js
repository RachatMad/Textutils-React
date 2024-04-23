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
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } } id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-4 " onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-primary " onClick={handleclearClick}>clear</button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>space remover</button>

      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Min required to read this words</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
      </div>
    </>
  );
  
}

