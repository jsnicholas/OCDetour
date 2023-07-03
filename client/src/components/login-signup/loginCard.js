import BreatheIcon from "../global/breatheIcon";
import SignupCard from "./signupCard";
import { useNavigate } from "react-router-dom";

function LoginCard() {

        // when login/sign up button is clicked
    // page transition to activity page
    const navigate = useNavigate();

    const navigateToActivities = () => {
      // 👇️ navigate to /contacts
      navigate('activities');
    };

    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <SignupCard></SignupCard>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Login Instead</button>
                    </div>
                </form>
            </dialog>
            <div className="z-40 card h-96 w-96 bg-base-100 text-neutral-content mx-auto">
                <div className="card-body items-center text-center">
                    {/* Breathing Icon (small) */}
                    <BreatheIcon
                        circleWidth="6rem"
                        circleHeight="6rem"
                    />

                    <h2 className="card-title">Welcome!</h2>
                    <span>Please log in.</span>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral" onClick={navigateToActivities}>Log in</button>
                        <button className="btn" onClick={() => window.my_modal_1.showModal()}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCard;
