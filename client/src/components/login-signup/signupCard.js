import { useNavigate } from 'react-router-dom';


function SignupCard() {
    // when login/sign up button is clicked
    // page transition to activity page
    const navigate = useNavigate();

    const navigateToActivities = () => {
      // 👇️ navigate to /contacts
      navigate('activities');
    };


    return (
        <div className="card h-96 w-96 bg-base-100 text-neutral-content mx-auto">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Welcome!</h2>
                <p>Sign up below.</p>
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" id="email-signup" name="email"/>
                <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" id="password-signup" name="password"/>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral signup" type="submit" onClick={navigateToActivities}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignupCard;