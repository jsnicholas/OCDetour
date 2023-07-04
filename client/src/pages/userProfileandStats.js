import UserInfo from "../components/userProfile/userInfo";
import UserStats from "../components/userProfile/userStats";

function UserProfile() {
    return (
        <>
            <section className="w-full md:w-96 flex flex-col my-6">
                <figure className="my-6 flex items-center">
                    <UserInfo />
                </figure>
                <span className="text-center my-2">Welcome!</span>
                <UserStats />
            </section>
        </>
    )
}

export default UserProfile;