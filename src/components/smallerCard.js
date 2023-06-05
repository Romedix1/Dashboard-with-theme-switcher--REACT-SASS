import React from "react";

export default function smallerCard(props) {
    return (

                <article className="smaller-card--container">
                    <div className="smaller-card--flex">
                        <p className="smaller-card--views-text">{props.actionName}</p>
                        <img className="smaller-card--platform-img" src={props.platformImg} alt="platform image" />
                    </div>
                    <div className="smaller-card--flex">
                        <p className="smaller-card--views-value">{props.viewsValue}</p>

                        <div>
                            <img src={props.ratioStatus === "minus" ? "./images/icon-down.svg" : "./images/icon-up.svg"} alt="arrow image" />
                            <p className={props.ratioStatus === "minus" ? "smaller-card--minus-ratio" : "smaller-card--plus-ratio"}>{props.ratioValue}%</p>
                        </div>
                    </div>
                </article>

    )
}