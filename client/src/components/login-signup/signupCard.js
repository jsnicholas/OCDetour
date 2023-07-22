import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from "../../utils/auth"

function SignupCard() {

    // create user query
    const [addUser, { error, data }] = useMutation(CREATE_USER);
    useEffect(() => {
        if (error) {
            console.error(error)
            // setShowAlert(true)
        } else {
            console.log(`error creating user`)
            // setShowAlert(false)
        }
    })
    // set initial form state
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // // set state for form validation
    // const [validated] = useState(false);
    // // set state for alert
    // const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });

            Auth.login(data.createUser.token);
            // after creating a user, take them to welcome page
            window.location = "/activities"
        } catch (err) {
            console.error(err);
            // setShowAlert(true);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className="card h-96 w-96 bg-base-100 text-neutral-content mx-auto">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Welcome!</h2>
                <p>Sign up below.</p>
                {/* sign up form input fields */}
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="my-2 input input-bordered w-full max-w-xs"
                        id="email-signup"
                        name="email"
                        value={userFormData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="my-2 input input-bordered w-full max-w-xs"
                        id="password-signup"
                        name="password"
                        value={userFormData.password}
                        onChange={handleInputChange}
                        required />

                    {/* submit button area */}
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-neutral signup"
                            type="button"
                            onClick={handleFormSubmit}
                            disabled={!(userFormData.email && userFormData.password)}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupCard;