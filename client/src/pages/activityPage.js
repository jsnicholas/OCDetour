import ActivityCard from "../components/activityCard";


function ActivityPage() {
    // when login/sign up button is clicked
    // page transition to activity page


    return (
        <>
            <section className="container max-w-full columns-1">
                <ActivityCard
                    activityTitle="Meditation"
                    activityTimer="30 minutes"
                    activityDescription="Breathing Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
                <ActivityCard
                    activityTitle="Drawing"
                    activityTimer="10 minutes"
                    activityDescription="Creative Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
                <ActivityCard
                    activityTitle="Take a Walk"
                    activityTimer="60 minutes"
                    activityDescription="Exercise Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
                <ActivityCard
                    activityTitle="Take a Walk"
                    activityTimer="60 minutes"
                    activityDescription="Exercise Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
                <ActivityCard
                    activityTitle="Take a Walk"
                    activityTimer="60 minutes"
                    activityDescription="Exercise Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
                <ActivityCard
                    activityTitle="Take a Walk"
                    activityTimer="60 minutes"
                    activityDescription="Exercise Activity"
                    activityImage="https://picsum.photos/200"
                    alt="activity image placeholder" />
            </section>
        </>
    )
}

export default ActivityPage;