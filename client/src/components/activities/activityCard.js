import React from 'react';
import TimerPage from "./timer";

// import { useQuery } from '@apollo/client';
// import { ACTIVITIES } from '../../utils/queries';

// describe which parameters to expect
// ensure that we are receiving correct data
const ActivityCard = (props) => {

  const { activityTimer, activityDescription, activityTitle } =
    props;

  // return <img src={require("../../assets/activities/${activityDescription}.jpg")}

  function description() {
    if (activityDescription) {
      return (<img className="h-24 w-full object-cover md:h-full md:w-48" src={require(`../../assets/activities/${activityDescription}.jpg`)} alt="Activity" />)
    } else {
      return <img className="h-24 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/200" alt="Random Activity from Picsum" />;
    }
  }

  return (
    <section>
      {/* modal for each activity */}
      <dialog id={activityTitle} className="modal">
        <form method="dialog" className="modal-box">
          <TimerPage
            activityTitle={activityTitle}
            activityTimer={activityTimer}
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* activity card */}
      <div className="cursor-pointer h-60 w-full md: w-fit md:h-48 mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 text-left" onClick={() => document.getElementById(activityTitle).showModal()}>
        <div className="md:flex">
          <div className="md:shrink-0" description={activityDescription}>
            {description()}
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{activityTimer} minutes</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{activityTitle}</p>
            <p className="mt-2 text-slate-500" >{activityDescription} Activity</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityCard;