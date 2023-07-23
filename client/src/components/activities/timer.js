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
            return <span>{hours} hour, {minutes} minutes, {seconds} seconds</span>;
        } else {
            // Render a countdown
            return <span>{minutes} minutes, {seconds} seconds</span>;
        }
    };
    return (
        <section className="flex flex-col items-center text-center">
            <BreatheIcon
                circleWidth="10rem"
                circleHeight="10rem"
            />
            <span className="text-custom-dark raleway-font-bold">{props.activityTitle}</span>< br />
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
                <button
                    className="btn btn-primary"
                    onClick={handleActivityStart}
                >
                    Start Activity
                </button>
            </div>
        </section>
    )
}

export default TimerPage;