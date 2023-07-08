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

// using switch case to render images conditionally
const ImageComponent = () => {
  let activityDescription = ["Breathing", "Creative", "Exercise", "Gardening", "Learning", "Meditation", "Music", "Nature", "Reading", "Writing"]
  return (
    <>
      <div className="md:shrink-0">
        {(() => {
          switch (activityDescription) {
            case 'Breathing':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={BreatheImg} alt="pink lotus and lily pads floating on a pond" />
            case 'Creative':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={CreativeImg} alt="person sits at a table painting oranges with paint tray next to them" />
            case 'Exercise':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={ExerciseImg} alt="a person walking on a pathway" />
            case 'Gardening':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={GardeningImg} alt="a green watering can waters plants in a garde" />
            case 'Learning':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={LearningImg} alt="person holds an apple" />
            case 'Meditation':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={MeditationImg} alt="a tea light burns in a green ceramic candle holder" />
            case 'Music':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={MusicImg} alt="a pair of headphones rest against records on a shelf" />
            case 'Nature':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={NatureImg} alt="bright green rolling mountains" />
            case 'Reading':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={ReadingImg} alt="open book lays on grass"/>
            case 'Writing':
              return <img className="h-24 w-full object-cover md:h-full md:w-48" src={WritingImg} alt="notebook and pen on a bed next to a cup of coffee and a blanket" />
            default:
              return null;
          }
       })
      }
      </div>
    </>
  )
}

export default ImageComponent;