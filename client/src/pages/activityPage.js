import ActivityCard from "../components/activities/activityCard";

function ActivityPage() {

    return (
        <>
            <div className="navbar bg-neutral">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className="btn btn-ghost normal-case text-xl">OCDetour</a>
            </div>
            <div className=" h-full drawer lg:drawer-open" >
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">See Activities</label>

                </div>
                <div className="drawer-side h-fit">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-fit h-fit bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <li><a>
                            <ActivityCard
                                activityTitle="Meditation"
                                activityTimer={30}
                                activityDescription="Breathing Activity"
                                activityImage="https://picsum.photos/200"
                                alt="activity image placeholder" /></a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <li><a>
                            <ActivityCard
                                activityTitle="Example"
                                activityTimer={30}
                                activityDescription="Example Activity"
                                activityImage="https://picsum.photos/200"
                                alt="activity image placeholder" /></a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <li><a>
                            <ActivityCard
                                activityTitle="Take a Walk"
                                activityTimer={60}
                                activityDescription="Exercise Activity"
                                activityImage="https://picsum.photos/200"
                                alt="activity image placeholder" /></a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <li><a>
                            <ActivityCard
                                activityTitle="Drawing"
                                activityTimer={10}
                                activityDescription="Creative Activity"
                                activityImage="https://picsum.photos/200"
                                alt="activity image placeholder" /></a></li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default ActivityPage;