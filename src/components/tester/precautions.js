import React from "react";
import {Link} from 'react-router-dom'
import "./precautions.css"
function Precautions(){

    return (
        <div className="precautions-main-container">
            <h1>Take THE FOLLOWING PRECAUTIONS TO STAY HEALTHY</h1>
            <p>displays the precautions</p>
            <Link to='/tester'><button className='back-button-precautions'>Back</button></Link>

        </div>

    )
}
export default Precautions;