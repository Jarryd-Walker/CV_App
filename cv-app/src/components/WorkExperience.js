import React, { useState, useRef } from "react";
import uniqid from 'uniqid'

function WorkExperience(){
    
    const [experience, setExperience] = useState([{
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
    }])
    const [hiddenClass, setHiddenClass] = useState('hidden')
    const [hideBtn, setHideBtn] = useState('')
    const titleRef = useRef()
    const companyRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()

    function showForm(){
        setHiddenClass('')
        if(hiddenClass === 'hidden'){
            setHideBtn('hidden')
        }
    }

    function addExperience(){
        setExperience([...experience,{
            [titleRef.current.name]: titleRef.current.value,
            [companyRef.current.name]: companyRef.current.value,
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
        setExperience(experience.filter(item => item.id !== name))
    }
    
    return (
        <>
            <h2>Work Experience</h2>
            <div>
                {
                    React.Children.toArray(experience.map(({ title, company, startDate, endDate, id }) => (
                        <section className="formData">
                            <h3 className="qual">{title}</h3>
                            <span className="edu">{company}</span>
                            <span className="sta">Started: {startDate}</span>
                            <span className="en">Completed: {endDate}</span>
                            <button name={id} onClick={remove}>X</button>
                        </section>
                    ))
                    )
                }
            </div>
            <form id="form" className={hiddenClass} action="">
                <label className="qual" htmlFor="">Title</label>
                <input ref={titleRef} className="qual2" name="title" placeholder="Add here" type="text" />
                <label className="edu" htmlFor="">Company</label>
                <input ref={companyRef} className="edu2" name="company" placeholder="Add here" type="text" />
                <label className="start" htmlFor="">Started</label>
                <input ref={startDateRef} className="start2" name="startDate" placeholder="YYYY" type="number" />
                <label className="end" htmlFor="">Completed</label>
                <input ref={endDateRef} className="end2" name="endDate" placeholder="YYYY" type="number" />
            </form>
            <button className={hiddenClass} onClick={addExperience}>Add</button>
            <button className={hiddenClass} onClick={cancel}>Cancel</button>
            <button className={hideBtn} onClick={showForm}>Add work experience</button>
        </>
    )
}

export default WorkExperience
