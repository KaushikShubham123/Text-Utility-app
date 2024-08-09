import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');


    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)

    }
    const handleClearClick = () => {
        // console.log("On change");
        let newText = '';
        setText(newText)

    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
    }

    return (
        <><div div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="button btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="button btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="button btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="button btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>


            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>  {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </div >

        </>
    );
}
