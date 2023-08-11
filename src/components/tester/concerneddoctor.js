import React from "react";
import {Link} from 'react-router-dom'
import "./concerneddoctor.css"
function ConcernedDoctor(){

    return (
        <div className="concerned-doctor-main-container">
            <h1>THE FOLLOWING SPECIALISED DOCTORS CAN HELP YOU</h1>
            <p>displays the specializations of doctors to whoom they have to approach</p>
            <Link to='/tester'><button className='back-button-concerned-doctor'>Back</button></Link>

        </div>

    )
}
export default ConcernedDoctor;