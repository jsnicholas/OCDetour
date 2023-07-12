import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
import ActivityCard from "../components/activities/activityCard";
import UserProfile from "./userProfileandStats";


function ActivityPage() {
    const navigate = useNavigate();
    // const refreshPage = () => {
    //     navigate(0)
    // }
    // refreshPage()
    //use query  to get all saved activities for the user
    const { loading, data } = useQuery(ME);
    console.log(`User data: ${JSON.stringify(data)}`);
    // check if the user has data, if so display it
    const activitiesData = data?.me || [];
    if (!activitiesData) {
        window.location = "/"
    }
    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg ">
                <section className="rounded-md grid grid-cols-1  m-auto">

                    <div className="p-4 grid grid-cols-1 mx-auto">
                        <UserProfile />
                    </div>
                    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-base-content mb-10">
                        {/* if the user has no activities, render hero block  */}
                        {activitiesData.savedActivities.length === 0 && <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Welcome!</h1>
                                    <p className="py-6">We're so glad you're here. Let's create an activity together! Click the button below to create your first activity.</p>
                                    <button className="btn btn-primary" onClick={navigate("/createactivity")}>Create Activity</button>
                                </div>
                            </div>
                        </div>}
                        {/* if the user has activities, render them */}
                        {activitiesData && activitiesData?.savedActivities?.map((activity, i) => {
                            return (
                                <ActivityCard
                                    key={i}
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