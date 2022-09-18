import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
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

        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPER CASE</button>
        </div>
    )
}
