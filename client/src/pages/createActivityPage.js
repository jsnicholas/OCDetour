import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

import { SAVE_ACTIVITY } from '../utils/mutations';

//mutation should be from the client/src/utils folder
// import saveActivity from '../../../server/schemas/resolvers/saveActivity'

function CreateActivityPage() {
    // when create button is clicked
    // page transition to activity page
    const navigate = useNavigate();

    const navigateToActivities = () => {
        // 👇️ navigate to activities list
        navigate('/activities');
    };

    // useState
    const [newActivity, setNewActivity] = useState({
        activityType: "",
        activityDescription: "",
        timeInSeconds: "",

    });

    // mutation
    const [saveActivity, { error, data }] = useMutation(SAVE_ACTIVITY);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setNewActivity({ ...newActivity, [name]: value });
    }

    // CREATE ACTIVITY: logic for new activity to be saved to account
    const handleSaveActivity = async (event) => {
        event.preventDefault();
        console.log(`New activity: ${JSON.stringify(newActivity)}`)
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await saveActivity({
                variables: { ...newActivity },
            });
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div id="CreateActivityPage" className="card z-30 my-10 h-fit w-96 md:card-side bg-base-100 shadow-xl mx-auto mt-10 h-96 w-96">
                <div className="card-body">
                    <h3 className="card-title">Let's get started:</h3>
                    <form onSubmit={handleSaveActivity}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label mb-2">
                                <span className="label-text font-bold">Activity Title:</span>
                            </label>
                            <input
                                name="activityType"
                                type="text"
                                placeholder="Type here..."
                                className="input input-bordered w-full max-w-xs mb-2"
                                id="createtitle"
                                onChange={handleInputChange} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label mb-2">
                                <span className="label-text font-bold">Activity Description:</span>
                            </label>
                            <select
                                name="activityDescription"
                                className="select select-primary w-full max-w-xs mb-2 font-bold"
                                id="createdescription"
                                onChange={handleInputChange}>
                                <option disabled selected> </option>
                                <option>Breathing</option>
                                <option>Creative</option>
                                <option>Exercise</option>
                                <option>Gardening</option>
                                <option>Learning</option>
                                <option>Meditation</option>
                                <option>Music</option>
                                <option>Nature</option>
                                <option>Reading</option>
                                <option>Writing</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label  mb-2">
                                <span className="label-text font-bold">Activity Timer:</span>
                            </label>
                            <input
                                name="timeInSeconds"
                                type="number"
                                placeholder="Type here..."
                                className="input input-bordered w-full max-w-xs mb-2"
                                id="createtimer"
                                onChange={handleInputChange} />
                        </div>
                        <div className="card-actions justify-end mb-2">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                                onClick={handleSaveActivity}>Create</button>
                        </div>
                        {error && <div className="alert alert-error">Something went wrong...</div>}
                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateActivityPage;