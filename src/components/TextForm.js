import React, { useState } from 'react'


export default function TextForm(props) {

    const emptyText = (text) => {
       return  text.trim() === ""? true : false}

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        if (emptyText(text)) {
            props.showAlert("Please enter text to convert", "warning")
            return
        }
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const clearOnClick = () => {
        if (emptyText(text)) {
            props.showAlert("Please enter text to clear", "warning")
            return
        }
        setText('')
        props.showAlert("Text cleared", "success")
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        if (emptyText(text)) {
            props.showAlert("Please enter text to convert", "warning")
            return
        }
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
     }
   

     const handleCopy = () => {
        var text= document.getElementById('myBox');
        if (emptyText(text.value)) {
            props.showAlert("Please enter text to copy", "warning")
            return
        }
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard", "success")
     }

     const handleExtraSpaces = () =>{
        let newText = text.split(/\s+/);
        if (emptyText(text)) {
            props.showAlert("Please enter text to remove extra spaces", "warning")
            return
        }
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
     }

const [text, setText] = useState('');
return (
    <>
        <div className="container">
            <div className="mb-3">
                <h1> {props.heading}  </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange}   style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743',}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick} > Convert to Uppercase</button>
            <button className="btn btn-primary m-1" onClick={handleloClick} > Convert to LowerCase</button>
            <button className="btn btn-primary m-1" onClick={clearOnClick} >clear text</button>
            <button className="btn btn-primary m-1" onClick={handleCopy} >copy</button>
            <button className="btn btn-primary m-1" onClick={handleExtraSpaces} >remove extra spaces</button>
        </div>
        <div className="container my-4">
            <h2>Your text summary</h2>
            <p>{text.trim()==="" ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
            <p>{text.trim()==="" ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p> {text.length>0 ? text : "enter something in text area."}  </p>
        </div>

    </>
)
}
