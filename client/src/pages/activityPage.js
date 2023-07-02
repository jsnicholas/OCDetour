import ActivityCard from "../components/activities/activityCard";

function ActivityPage() {
    return (
        <>
            <section className="flex flex-col">
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
        </>
    )
}

export default ActivityPage;