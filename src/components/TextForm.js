import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("upper case is clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        //props.showAlert("Converted to Uppercase!!","success");

    }
    const handleLoClick = () => {
        //console.log("Lower case is clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        //props.showAlert("Converted to Lowercase!!", "success");

    }
    const handlecl = () => {
        // console.log("Lower case is clicked " + text);
        let newText = "";
        setText(newText);
        //props.showAlert("Cleared ", "success");

    }
    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={ {color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Upper case</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlecl}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}