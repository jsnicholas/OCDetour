import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { SAVE_ACTIVITY } from '../utils/mutations';


function CreateActivityPage() {

    // useState
    const [newActivity, setNewActivity] = useState({
        _id: "",
        activityType: "",
        activityDescription: "",
        timeInSeconds: "",

    });

    // mutation
    const [saveActivity, { error, data }] = useMutation(SAVE_ACTIVITY);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewActivity({ ...newActivity, [name]: value });
    }

    // CREATE ACTIVITY: logic for new activity to be saved to account
    const handleSaveActivity = async (event) => {
        event.preventDefault();
        // console.log(`New activity: ${JSON.stringify(newActivity)}`)
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await saveActivity({
                variables: { ...newActivity },
            });
            if (data) {
                // after creating an activity, go back to activity page
                window.location = "/activities"
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div id="CreateActivityPage" className="card z-30 my-10 h-fit w-80 m:w-96 md:card-side bg-base-100 shadow-xl mx-auto mt-10 h-96 w-96">
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
                                defaultValue={'DEFAULT'}
                                name="activityDescription"
                                className="select select-primary w-full max-w-xs mb-2 font-bold"
                                id="createdescription"
                                onChange={handleInputChange}>
                                <option disabled value="DEFAULT">Choose a Category</option>
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
                                <span className="label-text font-bold">Activity Length (In Minutes):</span>
                            </label>
                            <input
                                name="timeInSeconds"
                                type="number"
                                min={1}
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
                        {error && <div className="alert alert-error">Error creating activity.</div>}
                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateActivityPage;