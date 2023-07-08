import ActivityCard from "../components/activities/activityCard";
// import CrudActivities from "../components/activities/crudActivities";
import UserProfile from "./userProfileandStats";

function ActivityPage() {

    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg">
                <section className="rounded-md grid grid-cols-1  m-auto">
                    <div className="p-4 grid grid-cols-1 mx-auto">
                        <UserProfile />
                        {/* <CrudActivities /> */}
                    </div>
                    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-base-content">
                        <ActivityCard
                            activityTitle="Meditation"
                            activityTimer={30}
                            activityDescription="Breathing Activity"
                            activityImage="https://picsum.photos/200/200"
                            alt="activity image placeholder" />

                        <ActivityCard
                            activityTitle="Example"
                            activityTimer={30}
                            activityDescription="Example Activity"
                            activityImage="https://picsum.photos/200/400"
                            alt="activity image placeholder" />

                        <ActivityCard
                            activityTitle="Take a Walk"
                            activityTimer={60}
                            activityDescription="Exercise Activity"
                            activityImage="https://picsum.photos/200/500"
                            alt="activity image placeholder" />

                        <ActivityCard
                            activityTitle="Drawing"
                            activityTimer={10}
                            activityDescription="Creative Activity"
                            activityImage="https://picsum.photos/200"
                            alt="activity image placeholder" />
                    </div>

                </section>
            </section>
        </>
    )
}

export default ActivityPage;