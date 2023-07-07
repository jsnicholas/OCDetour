import React from 'react';
import TimerPage from "./timer";

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

const list = [
  { 
    activityDescription: "Breathing",
    activityImage: BreatheImg,
    alt: "pink lotus and lily pads floating on a pond",
    key: 1,
  },
  { 
    activityDescription: "Creative",
    activityImage: CreativeImg,
    alt: "person sits at a table painting oranges with paint tray next to them",
    key: 2,
  },
  { 
    activityDescription: "Exercise",
    activityImage: ExerciseImg,
    alt: "a person walking on a pathway",
    key: 3,
  },
  { 
    activityDescription: "Gardening",
    activityImage: GardeningImg,
    alt: "a green watering can waters plants in a garden",
    key: 4,
  },
  { 
    activityDescription: "Learning",
    activityImage: LearningImg,
    alt: "person holds an apple",
    key: 5,
  },
  { 
    activityDescription: "Meditation",
    activityImage: MeditationImg,
    alt: "a tea light burns in a green ceramic candle holder",
    key: 6,
  },
  { 
    activityDescription: "Music",
    activityImage: MusicImg,
    alt: "a pair of headphones rest against records on a shelf",
    key: 7,
  },
  { 
    activityDescription: "Nature",
    activityImage: NatureImg,
    alt: "bright green rolling mountains",
    key: 8,
  },
  { 
    activityDescription: "Reading",
    activityImage: ReadingImg,
    alt: "open book lays on grass",
    key: 9,
  },
  { 
    activityDescription: "Writing",
    activityImage: WritingImg,
    alt: "notebook and pen on a bed next to a cup of coffee and a blanket",
    key: 10,
  },
]

// describe which parameters to expect
// ensure that we are receiving correct data
const ActivityCard = (props) => {

  const { activityImage, alt, activityTimer, activityDescription, activityTitle } =
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
          <div className="md:shrink-0">
            <img className="h-24 w-full object-cover md:h-full md:w-48" src={activityImage} alt={alt} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{activityTimer} minutes</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{activityTitle}</p>
            <p className="mt-2 text-slate-500">{activityDescription} Activity</p>
          </div>
        </div>
      </div>
    </>)
}

export default ActivityCard;