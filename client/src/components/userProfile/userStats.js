function UserStats(props) {
    return (
        <div className="stats stats-horizontal md:stats-vertical shadow">

            <div className="stat">
                <div className="stat-title">Activities</div>
                <div className="stat-value">{props.totalActivities}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Total Focus</div>
                <div className="stat-value">{props.totalFocusTime}</div>
            </div>

        </div>
    )
}

export default UserStats;