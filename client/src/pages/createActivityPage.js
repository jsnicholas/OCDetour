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
    const [newActivity, setNewActivity] = useState("");

    // mutation
    const [saveActivity, { error }] = useMutation(SAVE_ACTIVITY);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewActivity({ ...newActivity, [name]: value });
    }

    // CREATE ACTIVITY: logic for new activity to be saved to account
    const handleSaveActivity = async () => {





        // const title = document.querySelector("#createtitle").value().trim()
        // const description = document.querySelector("#createdescription").value().trim()
        // const timer = document.querySelector("#createtimer").value().trim()


    }




    return (
        <>
            <div id="CreateActivityPage" className="card z-30 my-10 h-fit w-fit md:card-side bg-base-100 shadow-xl mx-auto my-10 h-96 w-96">
                <div className="card-body">
                    <h3 className="card-title">Let's get started:</h3>
                    <form onSubmit={handleSaveActivity}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Activity Title:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="input input-bordered w-full max-w-xs"
                                id="createtitle"
                                onChange={handleInputChange} />

                        </div>
                        <select
                            className="select select-primary w-full max-w-xs"
                            id="createdescription"
                            onChange={handleInputChange}>
                            <option disabled selected>Activity Description:</option>
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Activity Timer:</span>
                            </label>
                            <input 
                            type="number" 
                            placeholder="Type here..." 
                            className="input input-bordered w-full max-w-xs" 
                            id="createtimer" 
                            onChange={handleInputChange}/>
                        </div>
                        <div className="card-actions justify-end">
                            <button 
                            type="submit" 
                            className="btn btn-primary"
                            onclick={navigateToActivities}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateActivityPage;