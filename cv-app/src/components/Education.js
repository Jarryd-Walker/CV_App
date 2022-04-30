import React, { useState, useRef } from "react";
import uniqid from 'uniqid'

function Education(){
    
    const [education, setEducation] = useState([{
        qualification: '',
        school: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
        ar: []
    }])
    const [hiddenClass, setHiddenClass] = useState('hidden')
    const [hideBtn, setHideBtn] = useState('')
    const qualificationRef = useRef()
    const schoolRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()

    function showForm(){
        setHiddenClass('')
        if(hiddenClass === 'hidden'){
            setHideBtn('hidden')
        }
    }

    function addEducation(){
        setEducation([...education,{
            [qualificationRef.current.name]: qualificationRef.current.value,
            [schoolRef.current.name]: schoolRef.current.value,
            [startDateRef.current.name]: startDateRef.current.value,
            [endDateRef.current.name]: endDateRef.current.value,
            id: uniqid(),
        }])
        
        setHiddenClass('hidden')
        setHideBtn('')
    }

    function cancel(){
        setHiddenClass('hidden')
        setHideBtn('')
    }

    function remove(e){
        const name = e.target.getAttribute('name')
        setEducation(education.filter(item => item.id !== name))
    }
    
    return (
        <>
            <h2>Education</h2>
            <div>
                {
                    React.Children.toArray(education.map(({ qualification, school, startDate, endDate, id }) => (
                        <section className="educationData">
                            <h3 className="qual">{qualification}</h3>
                            <span className="edu">{school}</span>
                            <span className="sta">Started: {startDate}</span>
                            <span className="en">Completed: {endDate}</span>
                            <button name={id} onClick={remove}>X</button>
                        </section>
                    ))
                    )
                }
            </div>
            <form id="educationForm" className={hiddenClass} action="">
                <label className="qual" htmlFor="">Qualification</label>
                <input ref={qualificationRef} className="qual2" name="qualification" placeholder="Add here" type="text" />
                <label className="edu" htmlFor="">Education provider</label>
                <input ref={schoolRef} className="edu2" name="school" placeholder="Add here" type="text" />
                <label className="start" htmlFor="">Started</label>
                <input ref={startDateRef} className="start2" name="startDate" placeholder="YYYY" type="number" />
                <label className="end" htmlFor="">Completed</label>
                <input ref={endDateRef} className="end2" name="endDate" placeholder="YYYY" type="number" />
            </form>
            <button className={hiddenClass} onClick={addEducation}>Add</button>
            <button className={hiddenClass} onClick={cancel}>Cancel</button>
            <button className={hideBtn} onClick={showForm}>Add education</button>
        </>
    )
}

export default Education
