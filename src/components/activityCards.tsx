function ActivityCard(props) {
  return (
    <section className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          activityIcon={props.activityIcon}
          activityAlt={props.activityAlt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.activityTitle}</h2>
        <p>{props.activityLength}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Start</button>
        </div>
      </div>
    </section>
  );
}
export default ActivityCard;
