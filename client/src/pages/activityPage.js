import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
import ActivityCard from "../components/activities/activityCard";
import UserProfile from "./userProfileandStats";
import WelcomeTutorial from '../components/activities/welcomeTutorial';


function ActivityPage() {
    const navigate = useNavigate();
    // const refreshPage = () => {
    //     navigate(0)
    // }
    // refreshPage()
    //use query  to get all saved activities for the user
    const { loading, data } = useQuery(ME);
    // check if the user has data, if so display it
    const activitiesData = data?.me || [];
    if (!activitiesData) {
        navigate("/")
    }
    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg ">
                <section className="rounded-md grid grid-cols-1  m-auto">
                    {/* if the user has no activities, render hero block or redirect if not logged in */}
                    {!activitiesData.savedActivities && navigate("/")}
                    {activitiesData.savedActivities?.length === 0 && <WelcomeTutorial />}

                    {/* render profile */}
                    {activitiesData.savedActivities?.length > 0 && <div className="p-4 grid grid-cols-1 mx-auto">
                        <UserProfile />

                    </div>}
                    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-base-content mb-10">
                        {/* if the user has activities, render them */}
                        {activitiesData && activitiesData?.savedActivities?.map((activity, i) => {
                            return (
                                <ActivityCard
                                    key={activity._id}
                                    activityId={activity._id}
                                    activityTitle={activity.activityType}
                                    activityTimer={activity.timeInSeconds}
                                    activityDescription={activity.activityDescription}
                                />
                            )
                        })
                        }
                    </div>
                </section>
            </section>
        </>
    )
}

export default ActivityPage;