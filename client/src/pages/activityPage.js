import ActivityCard from "../components/activities/activityCard";

function ActivityPage() {
    // page transition to activity page
    //light color half circle with activity list inside are pulled up from the bottom of the page

    return (
        <>
            <div className="background">
                <section className="container max-w-full columns-1 transition">
                    <ActivityCard
                        activityTitle="Meditation"
                        activityTimer={30}
                        activityDescription="Breathing Activity"
                        activityImage="https://picsum.photos/200"
                        alt="activity image placeholder" />
                    <ActivityCard
                        activityTitle="Drawing"
                        activityTimer={10}
                        activityDescription="Creative Activity"
                        activityImage="https://picsum.photos/200"
                        alt="activity image placeholder" />
                    <ActivityCard
                        activityTitle="Take a Walk"
                        activityTimer={60}
                        activityDescription="Exercise Activity"
                        activityImage="https://picsum.photos/200"
                        alt="activity image placeholder" />
                </section>
            </div >
        </>
    )
}

export default ActivityPage;