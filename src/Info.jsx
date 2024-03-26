import React from "react"


export default function Info(){
    return (
    <div className="Info">
        <img src="./src/profile-pic.jpg"></img>
        <h1>Dino Jazvin</h1>
        <h2>Full Stack Developer</h2>
        <p>dinojazvin.website</p>
        <div className="info-buttons">
            <button id="email-btn">Email</button>
            <button id="linkedin-btn">LinkedIn</button>
        </div>
    </div>
    )
}