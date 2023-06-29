

function ActivityCard(props) {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={props.activityImage} alt={props.alt} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.activityTimer}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.activityTitle}</p>
            <p className="mt-2 text-slate-500">{props.activityDescription}</p>
          </div>
        </div>
      </div>
    </>)
}

export default ActivityCard;