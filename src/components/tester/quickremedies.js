import React from "react";
import { Link } from "react-router-dom";
import "./quickremedies.css"
function QuickRemedies() {
  return (
    <div className="quickremedies-main-container">
      <h1>WE SUGGEST YOU THESE REMEDIES TO STAY HEALTHY</h1>
      <p>displays the remedies</p>
      <Link to="/tester">
        <button className="back-button-remedies">Back</button>
      </Link>
    </div>
  );
}
export default QuickRemedies;
