// import React, { useState } from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'

  // })
  // const [BtnText, setBtnText] = useState("Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',

  //     })
  //     setBtnText("Dark Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setBtnText("light Mode")
  //   }

  // }

  return (
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className="my-3" >AboutUs</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }>
              <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }>
              <strong>TextUtil</strong> is a free and user-friendly online tool for all your text-related needs. Whether you need to format, analyze, or transform text, we’ve got you covered!Feel free to use this sentence on your website.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#4a4e69',color:props.mode==='light'?'black':'white' } }>
              <strong>TextUtil</strong>  is your go-to online companion for all things text-related. Whether you’re a writer, student, or professional, our platform simplifies your tasks. With a user-friendly interface, you can format, analyze, and transform text effortlessly. The best part? TextUtil is free to use! Plus, it’s browser-compatible, ensuring a seamless experience across different web browsers. Try it out today and elevate your text processing game.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2  ">
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-2" >{BtnText}</button>
      </div> */}
    </div>
  );
  
}
