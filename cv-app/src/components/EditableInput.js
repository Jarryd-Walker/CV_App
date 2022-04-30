import React, { useState } from "react";

function EditableInput(props) {
    
    const [editable, setEditable] = useState(false)
    const [HtmlTag] = useState(props.tag)
    const [text, setText] = useState(props.value)

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        setEditable(true)
    }

    function enter(e) {
        if(e.key === 'Enter'){
            save(e)
        }
    }

    function save(e){
        setText(e.target.value)
        setEditable(false)
        if(text === ''){
            setText(props.value)
        }
    }

    return (
        editable ?
        <input
            type='text'
            value={text}
            autoFocus={true}
            onChange={handleChange}
            onKeyPress={enter}
            onBlur={save}
        />
        : 
        <HtmlTag onClick={handleClick}>{text}</HtmlTag> 
    )
}

export default EditableInput
