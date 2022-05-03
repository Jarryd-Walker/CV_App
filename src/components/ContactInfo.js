import React from "react";
import EditableInput from "./EditableInput";

function ContactInfo() {

    return (
    <>
        <div id="nameContainer">
            <EditableInput inputTag='input' value='Add Name' tag='h1' />
        </div>
        <div id="contactContainer">
            <h2>Contact</h2>
            <h3>Mobile</h3>
            <EditableInput inputTag='input' value='Add Mobile' tag='h4' />
            <h3>Email</h3>
            <EditableInput inputTag='input' value='Add Email' tag='h4' />
            <h3>Address</h3>
            <EditableInput inputTag='input' value='Add Address' tag='h4' />
            <h3>LinkedIn</h3>
            <EditableInput inputTag='input' value='Add LinkedIn link' tag='h4' />
            <h3>Github</h3>
            <EditableInput inputTag='input' value='Add Github link' tag='h4' />
            <h3>Portfolio</h3>
            <EditableInput inputTag='input' value='Add Portfolio link' tag='h4' />
        </div>
    </>
    )
    
}

export default ContactInfo;