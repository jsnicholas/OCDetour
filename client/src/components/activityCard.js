
// describe which parameters to expect
// ensure that we are receiving correct data
const ActivityCard = (props) => {
  const { activityImage, alt, activityTimer, activityDescription, activityTitle } =
    props;
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={activityImage} alt={alt} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{activityTimer}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{activityTitle}</p>
            <p className="mt-2 text-slate-500">{activityDescription}</p>
          </div>
        </div>
      </div>
    </>)
}

export default ActivityCard;