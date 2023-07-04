import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

//mutation should be from the client/src/utils folder
// import saveActivity from '../../../server/schemas/resolvers/saveActivity'

function SignUpCreateActivityPage() {
    // when create button is clicked
    // page transition to activity page
    const navigate = useNavigate();

    const navigateToActivities = () => {
        // 👇️ navigate to activities list
        navigate('/activities');
    };

    // SIGNUP: logic for new activity to be saved to account
     const saveActivity = (props) => {
        //mutation: saveActivity
        // const [saveActivity] = useMutation(SAVE_ACTIVITY);

        //useState
        const [signupActivity, setSignupActivity] = useState("");

        const title = document.querySelector("#signuptitle").value().trim()
        const description = document.querySelector("#signupdescription").value().trim()
        const timer = document.querySelector("#signuptimer").value().trim()

        // mutation

     }




    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl z-30 mx-auto my-10 h-96 w-96">
                <div className="card-body">
                    <h3 className="card-title">You're in control. Let's Get Started:</h3>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Activity Title:</span>
                        </label>
                        <input type="text" placeholder="Type here..." className="input input-bordered w-full max-w-xs" id="signuptitle"/>
                    </div>
                    <select className="select select-primary w-full max-w-xs" id="signupdescription">
                        <option disabled selected>Activity Description:</option>
                        <option>Breathing</option>
                        <option>Creative</option>
                        <option>Exercise</option>
                        <option>Gardening</option>
                        <option>Learning</option>
                        <option>Music</option>
                        <option>Nature</option>
                        <option>Reading</option>
                        <option>Writing</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Activity Timer:</span>
                        </label>
                        <input type="text" placeholder="Type here..." className="input input-bordered w-full max-w-xs" id="signuptimer" />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={navigateToActivities}>Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpCreateActivityPage;