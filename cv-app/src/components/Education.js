import React, { useState, useRef } from "react";

function Education(){
    
    const [education, setEducation] = useState([{
        qualification: '',
        school: '',
        startDate: '',
        endDate: '',
    }])
    const inputRef = useRef(null)

    function showForm(){

    }

    function addEducation(){
        const inputValue = inputRef.current.value
        setEducation(inputValue)
    }

    return (
        <>
            <h2>Education</h2>
            <form id="educationForm" className="hidden" action="">
                <label htmlFor="">Qualification</label>
                <input ref={inputRef} placeholder="Add here" type="text" />
                <label htmlFor="">Education provider</label>
                <input placeholder="Add here" type="text" />
                <label htmlFor="">Started</label>
                <input placeholder="YYYY" type="number" />
                <label htmlFor="">Completed</label>
                <input placeholder="YYYY" type="number" />
            </form>
            <button onClick={addEducation}>Add</button>
            <button>Cancel</button>
            <button onClick={showForm}>Add education</button>
        </>
    )
}

export default Education