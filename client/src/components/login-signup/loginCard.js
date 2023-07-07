import BreatheIcon from "../global/breatheIcon";
import SignupCard from "./signupCard";
import { useFormAction, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth"
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // use login functions for graphQL
    const [loginUser] = useMutation(LOGIN);


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
            const {data} = await loginUser({
                variables: { ...userFormData }
            });
            Auth.login(data.login.token);
            window.location = "/activities"
        } catch (error) {
            console.error(error);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };
    // when login/sign up button is clicked
    // page transition to activity page
    const navigate = useNavigate();

    const navigateToActivities = () => {
        // 👇️ navigate to /contacts
        navigate('/activities');
    };

    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div method="dialog" className="modal-box">
                    <SignupCard></SignupCard>
                    <form className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Login Instead</button>
                    </form>
                </div>
            </dialog>
            <div className="z-40 card h-112 w-96 bg-base-100 text-neutral-content mx-auto">
                <div className="card-body items-center text-center">
                    {/* Breathing Icon (small) */}
                    <BreatheIcon
                        circleWidth="6rem"
                        circleHeight="6rem"
                    />

                    <h2 className="card-title">Welcome!</h2>
                    <span>Please log in.</span>
                    <form onSubmit={handleFormSubmit}>
                        {/* Email input */}
                        <input
                            className="input input-bordered w-full max-w-xs my-2"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleInputChange}
                            value={(userFormData.email)}
                        />
                        {/* Password input */}
                        <input
                            className="input input-bordered w-full max-w-xs my-2"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <div className="card-actions justify-end">
                            {/* Login button */}
                            <button
                                onClick={handleFormSubmit}
                                className="btn btn neutral"
                                disabled={!(userFormData.email && userFormData.password)}
                                type='submit'
                                variant='success'>
                                Login
                            </button>
                            {/* sign up button */}
                            <button className="btn" onClick={() => window.my_modal_1.showModal()}>Sign Up</button>

                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default LoginForm;
