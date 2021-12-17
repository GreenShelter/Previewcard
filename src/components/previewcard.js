import React from "react";
import './previewcard.css';
import '../fontsheet.css'


function Previewcard() {
    return(
        <div className="flex">
            <div className="grid-container">
                <div className="item1"> 
                 Get <span>insights</span> that help <br/>your business grow.
                 </div>
                <div className="item2">
                Discover the benefits of data analytics and make 
                better decisions regarding revenue, customer 
                experience, and overall efficiency. 
                </div>
                <div className="item3">
                <div>
                <span>10k+</span> <br/>companies
                </div>
                <div>
                <span>314</span> <br/>templates
                </div>
                <div>
                <span>12M+</span> <br/>queries
                </div>
                </div>
                </div>
        <div className="img"/>
        </div>
    );
};

export default Previewcard;