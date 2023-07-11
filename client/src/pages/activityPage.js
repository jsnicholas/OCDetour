import React from 'react';
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';

import ActivityCard from "../components/activities/activityCard";
import UserProfile from "./userProfileandStats";

function ActivityPage() {
    //use query  to get all saved activities for the user
    const { loading, data } = useQuery(USER);
    console.log(`User data: ${JSON.stringify(data)}`);

    // const findUser = user.findOne()

    const activitiesData = data || [];
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
                        {activitiesData?.savedActivities?.map((activity, i) => {
                            return (
                                <ActivityCard
                                    activityTitle={activity.activityType}
                                    activityTimer={activity.timeInSeconds}
                                    activityDescription={activity.activityDescription}
                                />
                            )
                        })}
                        {/*loading ? (
                            <div>Loading...</div>
                        ) : (
                            <ActivityCard
                                activities={activities}
                            />
                        )*/}

                        {/* Sidebar content here */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        {/*<ActivityCard
                            activityTitle="Meditation"
                            activityTimer={30}
                            activityDescription="Breathing" />}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        {/*<ActivityCard
                            activityTitle="Water the Garden"
                            activityTimer={15}

                            activityDescription="Gardening" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        {/*<ActivityCard
                            activityTitle="Read Poetry"
                            activityTimer={60}
                            activityDescription="Reading" />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        {/*<ActivityCard

                            activityTitle="Draw What You See"
                            activityTimer={45}
                            activityDescription="Creative" />*/}
                    </div>

                    {/* </div></div > */}
                </section>
            </section>
        </>
    )
}

export default ActivityPage;