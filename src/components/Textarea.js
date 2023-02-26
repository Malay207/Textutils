import React, { useState } from 'react'

function Textarea(props) {
    const [text, settext] = useState("")
    const [count, setcount] = useState(0)
    const upcase = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.alrt("Success", "Text Conveted To Upper Case")
    }
    const locase = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.alrt("Success", "Text Conveted To Lower Case")
    }
    const textchange = (e) => {
        settext(e.target.value);
    }
    const Clear = () => {
        let newText = "";
        settext(newText);
        setcount(0);
        props.alrt("Success", "Text Cleared")

    }
    const email = () => {
        let newText = text.split(" ");
        let count = 0;
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].match(validRegex))
                count++
        }
        setcount(count);
        props.alrt("Success", "All Emails Counted")


    }
    const copy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alrt("Success", "Text Copied")
    }
    const remove = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.alrt("Success", "Extra Space Removed")
    }
    const minus_extraspace = () => {

        let newtext = text.split(/[ ]+/).length;
        return newtext;

    }

    return (
        <>
            <div className="container my-3">
                <h1>Enter the text to analyze below</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={textchange} id="myBox" rows="8" placeholder='Enter the text'></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={upcase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={locase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={Clear}>Clear text</button>
                <button className="btn btn-primary mx-3 email" onClick={email}>Found Email</button>
                <button className="btn btn-primary mx-3 " onClick={copy}>Copy text</button>
                <div className="count">
                    <button className="btn btn-primary mx-3 my-3 " onClick={remove}>Remove Extra space</button>
                    <div className="count">
                        <p>
                            <h1>
                                Your Text Summery</h1>
                            {text.length === 0 ? 0 : text.split(" ").length} numbers of words & {(text.length - minus_extraspace()) + 1} numbers of Letter
                        </p>
                    </div>
                    <div className="time">
                        <p>
                            You read all words in: {text.length === 0 ? 0 : text.split(" ").length * 0.08} s
                        </p>
                    </div>
                    <div className="email">
                        <p>
                            You found {count} email
                        </p>
                    </div>
                    <div className="preview">
                        <h1>Preview</h1>
                        <p> {text.length > 0 ? text : "Write something to preview in the box"}</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Textarea