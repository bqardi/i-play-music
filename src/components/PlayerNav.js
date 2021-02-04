import { useState } from "react";
import helpers from "../helpers";
import "./PlayerNav.scss";

function PlayerNav({ms}){
    var [progress, setProgress] = useState(0);
    var [timeStr, setTimeStr] = useState("0:00");

    function updateProgress(e){
        var currProgress = parseFloat(e.target.value);
        var currTime = ((ms / 100 * currProgress)).toFixed(2);
        setTimeStr(helpers.timeStr(currTime));
        setProgress(currProgress);
    }

    return (
        <nav className="PlayerNav">
            <input className="PlayerNav__slider" onInput={updateProgress} type="range" name="duration" id="player-duration" value={progress} step="0.01"/>
            <div className="PlayerNav__durations">
                <p className="PlayerNav__durationText">{timeStr}</p>
                <p className="PlayerNav__durationText">{helpers.timeStr(ms)}</p>
            </div>
            <div className="PlayerNav__navigation">
                <button className="PlayerNav__button">
                    <svg className="PlayerNav__icon" viewBox="0 0 24 24"><path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"></path></svg>
                </button>
                <button className="PlayerNav__button">
                    <svg className="PlayerNav__icon" viewBox="0 0 24 24"><path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z"></path></svg>
                </button>
                <button className="PlayerNav__button PlayerNav__button--large">
                    <svg className="PlayerNav__icon" viewBox="0 0 24 24">
                        <linearGradient id="play-button" y1="0.425" x2="1" y2="0.425" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#ee0979"/><stop offset="1" stopColor="#ff6a00"/>
                        </linearGradient>
                        <path fill="url(#play-button)" d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                    </svg>
                </button>
                <button className="PlayerNav__button">
                    <svg className="PlayerNav__icon" viewBox="0 0 24 24"><path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z"></path></svg>
                </button>
                <button className="PlayerNav__button">
                    <svg className="PlayerNav__icon" viewBox="0 0 24 24"><path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z"></path></svg>
                </button>
            </div>
        </nav>
    );
}

export default PlayerNav;