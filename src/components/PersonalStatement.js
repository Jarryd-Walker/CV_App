import React from "react";
import EditableInput from "./EditableInput";

function PersonalStatement(){

    return (
        <div className='personalStatementInput'>
            <h2>Personal Statement</h2>
            <EditableInput inputTag='textarea' value='Add some info about yourself here' tag='p'/>     
        </div>
    )
}

export default PersonalStatement
