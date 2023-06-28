function LoginCard() {
    return (
        <>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Welcome</h2>
                    <p>Please log in.</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginCard;
