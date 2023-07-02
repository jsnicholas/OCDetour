import BreatheIcon from "../global/breatheIcon";

// import timer libraries
// read the documentation here: https://www.npmjs.com/package/react-countdown
import Countdown from 'react-countdown';

function TimerPage(props) {
    // do something when the count down ends
    // for now, it renders the text within the span
    // but this could also be configured to add the completed time to user stats
    const Completionist = () => <span>You did it!</span>;
    return (
        <section className="">
            <BreatheIcon
                circleWidth="10rem"
                circleHeight="10rem"
            />
            <Countdown
                key={props.activityTitle}
                autoStart={true}
                date={Date.now() + (props.activityTimer * 10000)}
            >
                <Completionist />
            </Countdown> <br />
            {/* this button is not currently working. I need to look more into the docs */}
            <button className="btn btn-primary" onClick={console.log(this)}>Start</button> <br />
            <span>{props.activityTitle}</span>< br />
            <span>{props.activityTimer}</span>

        </section>
    )
}

export default TimerPage;