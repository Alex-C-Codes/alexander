import React from "react";

import GoalTracker from "../Widgets/GoalTracker";

export default function Coding() {
    return (
        <div className="codingPage">
            <div className="content-card-container">
                <h2>My Works</h2>
                {/* <p>My web development company: <a href="https://www.pixelcooksites.com/">Pixel Cook Sites</a></p> */}

                <br></br>

                <div><GoalTracker/></div>
            
            </div>
        </div>
    )
}