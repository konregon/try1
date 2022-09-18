import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('enter your text here');
    // setText("new text"); // correct way to change state
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPER CASE</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
        </div>
        <div className="container my-2">
            <h2>Your text summery</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read this article</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
