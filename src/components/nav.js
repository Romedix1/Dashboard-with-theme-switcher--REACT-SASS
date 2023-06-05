import React, { useState } from "react";

export default function Nav({onClick}) {

    return (
        <nav className="nav">
            <div className="nav--desktop-left">
                <h1 className="nav--header">Social Media Dashboard</h1>
                <p className="nav--pharagraph">Total Followers: 23,004</p>
            </div>

            <div className="nav--dark-mode-container">
                <p className="nav--dark-mode-label">Dark Mode</p>

                <div>
                    <div>
                        <input id="dark-mode" className="nav--dark-mode-checkbox" type="checkbox" onClick={onClick}/>
                        <label htmlFor="dark-mode" className="checkbox-element"></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}