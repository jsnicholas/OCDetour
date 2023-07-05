import ActivityCard from "../components/activities/activityCard";
import CrudActivities from "../components/activities/crudActivities";
import UserProfile from "./userProfileandStats";

function ActivityPage() {

    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg">
                <section className="rounded-md grid grid-cols-1 lg:grid-cols-2  m-auto">
                    {/* disabling the drawer for now to work on desktop view */}
                    {/* <div className="h-full drawer lg:drawer-open" id="activities">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    Activities here?
                    <label htmlFor="my-drawer-2" className="btn btn-wide my-4 drawer-button sm:flex content-center lg:hidden ">See Activities</label>
                </div> */}
                    {/* <div className="drawer-side h-fit">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
                    {/* <ul className="menu p-4 w-fit max-h-fit bg-base-200 text-base-content"> */}
                    <div className="p-4 grid grid-cols-1 mx-auto">
                        <UserProfile />
                        {/* <CrudActivities /> */}
                    </div>
                    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-base-content">
                        {/* Sidebar content here */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Meditation"
                            activityTimer={30}
                            activityDescription="Breathing Activity"
                            activityImage="https://picsum.photos/200/200"
                            alt="activity image placeholder" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Example"
                            activityTimer={30}
                            activityDescription="Example Activity"
                            activityImage="https://picsum.photos/200/400"
                            alt="activity image placeholder" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Take a Walk"
                            activityTimer={60}
                            activityDescription="Exercise Activity"
                            activityImage="https://picsum.photos/200/500"
                            alt="activity image placeholder" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Drawing"
                            activityTimer={10}
                            activityDescription="Creative Activity"
                            activityImage="https://picsum.photos/200"
                            alt="activity image placeholder" />
                    </div>

                    {/* </div>
            </div > */}
                </section>
            </section>
        </>
    )
}

export default ActivityPage;