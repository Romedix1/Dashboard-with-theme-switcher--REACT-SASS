import React from "react";

export default function biggerCard(props) {

    return (
            <article className="bigger-card--container">
                <div className="bigger-card--user-name">
                    <img src={props.platformImg} alt="platform image"/>
                    <p className={props.platform ==="twitter" ? 
                    "twitter-color" : props.platform ==="facebook" ?
                    "facebook-color" : props.platform ==="youtube" ? 
                    "youtube-color" : "instagram-color"}>@{props.userName}</p>
                </div>

                <h2 className="bigger-cards--followers-value">{props.allFollowersValue}</h2>
                <p className="bigger-cards--followers-text">Followers</p>

                <div className="bigger-card--value-box">
                    <img src={props.followersRatio === "minus" ? "./images/icon-down.svg" : "./images/icon-up.svg"} alt="arrow image" />
                    <p className={props.followersRatio === "minus" ? "bigger-card--minus-ratio" : "bigger-card--plus-ratio"}>{props.todayFollowersValue} Today</p>
                </div>
            </article>
    )
}