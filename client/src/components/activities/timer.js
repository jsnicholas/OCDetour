import BreatheIcon from "../global/breatheIcon";
import React, { useRef } from "react";


// import timer libraries
// read the documentation here: https://www.npmjs.com/package/react-countdown
import Countdown from 'react-countdown';

function TimerPage(props) {
    const clockRef = useRef();
    // when the user clicks "Start" activity
    const handleActivityStart = (event) => {
        event.preventDefault()
        clockRef.current.start();
        // start the timer for this activity ONLY
        // this.Countdown.start();
    }


    // do something when the count down ends
    // for now, it renders the text within the span
    // but this could also be configured to add the completed time to user stats
    const Completionist = () => {
        // what should happen when the user completes an activity
        return (
            <span>You did it!</span>
        )
    };
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else if (hours) {
            // Render a countdown
            return <span>{hours}:{minutes}:{padNum(seconds)} seconds / {props.activityTimer}</span>;
        } else {
            // Render a countdown
            return <span>{minutes}:{padNum(seconds)} / {props.activityTimer}</span>;
        }
    };
    function padNum(num) {
        if (num < 10) {
            return "0" + num
        }
        return String(num)
    }
    return (
        <section className="flex flex-col items-center text-center">
            <button
                className="absolute z-20 top-24 btn btn-circle ghost responsive"
                onClick={handleActivityStart}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
            </button>
            <BreatheIcon
                circleWidth="12rem"
                circleHeight="12rem"
            />
            <span className="text-xl text-custom-dark raleway-font-bold">{props.activityTitle}</span>< br />
            <Countdown
                ref={clockRef}
                renderer={renderer}
                key={props.activityTitle}
                autoStart={false}
                date={Date.now() + (props.activityTimer * 60000)}
            >

                <Completionist />
            </Countdown> <br />
            <div>
                {/* <button
                    className="btn btn-circle ghost responsive"
                    onClick={handleActivityStart}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 384 512">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                </button> */}
            </div>
        </section >
    )
}

export default TimerPage;