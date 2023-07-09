import React from 'react';
import TimerPage from "./timer";

// import { useQuery } from '@apollo/client';
// import { ACTIVITIES } from '../../utils/queries';

// stock images
import BreatheImg from '../../assets/activities/breathe-jay-castor-7AcMUSYRZpU-unsplash.jpg'
import CreativeImg from '../../assets/activities/creative-sincerely-media-s3tPywNsLSo-unsplash.jpg'
import GardeningImg from '../../assets/activities/gardening-markus-spiske-sFydXGrt5OA-unsplash.jpg'
import ExerciseImg from '../../assets/activities/exercise-arek-adeoye-ljoCgjs63SM-unsplash.jpg'
import LearningImg from '../../assets/activities/learning-priscilla-du-preez-CoqJGsFVJtM-unsplash.jpg'
import MeditationImg from '../../assets/activities/meditation-hans-vivek-UiMkBvDQSAA-unsplash.jpg'
import MusicImg from '../../assets/activities/music-blocks-T3mKJXfdims-unsplash.jpg'
import NatureImg from '../../assets/activities/nature-qingbao-meng-01_igFr7hd4-unsplash.jpg'
import ReadingImg from '../../assets/activities/reading-annelies-geneyn-bhBONc07WsI-unsplash.jpg'
import WritingImg from '../../assets/activities/writing-sixteen-miles-out-3ZvHsFiZyME-unsplash.jpg'
// describe which parameters to expect
// ensure that we are receiving correct data
const ActivityCard = (props) => {

  const { activityTimer, activityDescription, activityTitle } =
    props;

  return (
    <>
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
          {/* using switch case to render images conditionally*/}
          <div className="md:shrink-0">
            {(() => {
              switch (activityDescription) {
                case <p className="mt-2 text-slate-500" activityDescription="Breathing">Breathing Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={BreatheImg} alt="pink lotus and lily pads floating on a pond" />
                case <p className="mt-2 text-slate-500" activityDescription="Creative">Creative Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={CreativeImg} alt="person sits at a table painting oranges with paint tray next to them" />
                case <p className="mt-2 text-slate-500" activityDescription="Exercise">Exercise Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={ExerciseImg} alt="a person walking on a pathway" />
                case <p className="mt-2 text-slate-500" activityDescription="Gardening">Gardening Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={GardeningImg} alt="a green watering can waters plants in a garde" />
                case <p className="mt-2 text-slate-500" activityDescription="Learning">Learning Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={LearningImg} alt="person holds an apple" />
                case <p className="mt-2 text-slate-500" activityDescription="Meditation"></p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={MeditationImg} alt="a tea light burns in a green ceramic candle holder" />
                case <p className="mt-2 text-slate-500" activityDescription="Music">Music Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={MusicImg} alt="a pair of headphones rest against records on a shelf" />
                case <p className="mt-2 text-slate-500" activityDescription="Nature">Nature Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={NatureImg} alt="bright green rolling mountains" />
                case <p className="mt-2 text-slate-500" activityDescription="Reading">Reading Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={ReadingImg} alt="open book lays open on the grass" />
                case <p className="mt-2 text-slate-500" activityDescription="Writing">Writing Activity</p>:
                  return <img className="h-24 w-full object-cover md:h-full md:w-48" src={WritingImg} alt="notebook and pen on a bed next to a cup of coffee and a blanket" />
                default:
                  return null;
              }
            })
            }
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{activityTimer} minutes</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{activityTitle}</p>
            <p className="mt-2 text-slate-500" activityDescription={activityDescription}>{activityDescription} Activity</p>
          </div>
        </div>
      </div>
    </>)
}

export default ActivityCard;