import React, {useState} from "react"



export default function TextForm( props){

  const handleUpClick =() => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick =() => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }

  const handleOnChange =(event) => {
    
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter your text");


    return(
<div>
<h1>{props.heading}</h1>
  <div className="mb-3">
    <label for ="myBox" className="form-label">Example text area</label>
    </div>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
   
<button className="btn btn-primary" onClick={handleUpClick}> Convert to Upper</button>
<button className="btn btn-primary" onClick={handleLowClick}> Convert to Lower</button>



  
</div>
    )
}
