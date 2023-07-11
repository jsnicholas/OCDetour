import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';
import { useNavigate } from 'react-router-dom';

import ActivityCard from "../components/activities/activityCard";
import UserProfile from "./userProfileandStats";


function ActivityPage() {
    // const navigate = useNavigate();
    // const refreshPage = () => {
    //     navigate(0)
    // }
    // refreshPage()
    //use query  to get all saved activities for the user
    const { loading, data } = useQuery(ME);
    console.log(`User data: ${JSON.stringify(data)}`);

    // check if the user has data, if so display it
    const activitiesData = data?.me || [];
    //query mongo user.findone()
    //by email

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
                        {console.log(activitiesData)}
                        {activitiesData?.savedActivities?.map((activity, i) => {
                            return (
                                <ActivityCard
                                    key={i}
                                    activityTitle={activity.activityType}
                                    activityTimer={activity.timeInSeconds}
                                    activityDescription={activity.activityDescription}
                                />
                            )
                        })}
                    </div>
                </section>
            </section>
        </>
    )
}

export default ActivityPage;