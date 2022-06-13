import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert('Converted to Uppercase', 'success')
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert('Converted to Lowercase', 'success')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () =>{
    let newText = '';
    setText(newText);
  }

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className={`form-control bg-${props.mode==='light'?'ligth':'dark'}`}
            id="myBox"
            style={{color: props.mode==='light'?'black':'white'}}
            rows="10"
            value={text}
            placeholder="Enter your text"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">
          <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Text Summary</h1>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(' ').filter((element)=> {return element.length!==0}).length} words, {text.length} characters</p>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{0.008 * text.split(' ').filter((element)=> {return element.length!==0}).length} minutes read</p>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text===''?text.split(/\n/).length-1:text.split(/\n/).length} paragraphs</p>
          <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:'Enter your text to Preview'}</p>
      </div>
    </>
  );
}

 