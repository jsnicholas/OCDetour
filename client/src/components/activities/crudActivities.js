function CrudActivities() {
    return (
        <section className="flex flex-wrap justify-center content-center mr-96">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Create a New Activity
                </div>
                <div className="collapse-content">
                    <p>CREATE FORM HERE</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Edit an Existing Activity
                </div>
                <div className="collapse-content">
                    <p>UPDATE FORM HERE</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Remove an Existing Activity
                </div>
                <div className="collapse-content">
                    <p>DELETE FORM HERE</p>
                </div>
            </div>
        </section>
    )
}

export default CrudActivities