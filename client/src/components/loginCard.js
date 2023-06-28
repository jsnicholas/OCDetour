function LoginCard() {
    return (
        <section className="container mx-auto">
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Welcome!</h2>
                    <p>Please log in.</p>
                    <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Log in</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginCard;