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
        navigator.clipboard.writeText(text);
        props.alrt("Success", "Text Copied")
    }
    const remove = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.alrt("Success", "Extra Space Removed")
    }
    const minus_extraspace = () => {

        let newtext = text.split(/\s+/).length;
        return newtext;

    }

    return (
        <>
            <div className="container my-3">
                <h1 className='mb-3'>Textutils-word counter,lettet counter,Lowercase to uppercase,uppercase to lowercase</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={textchange} id="myBox" rows="8" placeholder='Enter the text'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={upcase}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={locase}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={Clear}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={email}>Found Email</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={copy}>Copy text</button>
                <div className="count">
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3 " onClick={remove}>Remove Extra space</button>
                    <div className="count">
                        <p>
                            <h1>
                                Your Text Summery</h1>
                            {text.split(/\s+/).filter((e) => { return e.length != 0 }).length} numbers of words & {(text.length - minus_extraspace()) + 1} numbers of Letter
                        </p>
                    </div>
                    <div className="time">
                        <p>
                            You read all words in: {text.split(/\s+/).filter((e) => { return e.length != 0 }).length * 0.08} s
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