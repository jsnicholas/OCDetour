function createActivityPage() {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/200" alt="placeholder" /></figure>
            <div className="card-body">
                <h2 className="card-title">Create an activity!</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Activity Title:</span>
                    </label>
                    <input type="text" placeholder="Type here..." className="input input-bordered w-full max-w-xs" />
                </div>
                <select className="select select-primary w-full max-w-xs">
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
                    <input type="text" placeholder="Type here..." className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    )
}

export default createActivityPage;