import ActivityCard from "../components/activities/activityCard";
//import CrudActivities from "../components/activities/crudActivities";
import UserProfile from "./userProfileandStats";

function ActivityPage() {
    //use query or mutation to get all saved activities for the user
    
    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg mb-6">
                <section className="rounded-md grid grid-cols-1  m-auto">
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
                            activityDescription="Breathing"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Water the Garden"
                            activityTimer={15}

                            activityDescription="Gardening" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard
                            activityTitle="Read Poetry"
                            activityTimer={60}
                            activityDescription="Reading"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <ActivityCard

                            activityTitle="Draw What You See"
                            activityTimer={45}
                            activityDescription="Creative"/>
                    </div>

                    {/* </div></div > */}
                </section>
            </section>
        </>
    )
}

export default ActivityPage;