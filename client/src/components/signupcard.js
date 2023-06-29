function SignupCard() {
    return (
        <div className="card h-96 w-96 bg-base-100 text-neutral-content mx-auto">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Welcome!</h2>
                <p>Sign up below.</p>
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignupCard;