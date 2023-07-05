import UserInfo from "../components/userProfile/userInfo";
import UserStats from "../components/userProfile/userStats";

function UserProfile() {
    return (
        <>
            <section className="w-full md:w-96 flex flex-col my-6">
                <figure className="my-6 flex items-center">
                    <UserInfo
                        userAvatar="https://picsum.photos/200"
                    />
                </figure>
                <p className="text-xl text-custom-dark raleway-font-bold text-center semi-bold my-2">You're in control.<br /> Choose an activity below.</p>
                <UserStats
                    totalActivities="4"
                    totalFocusTime="30m"
                />
            </section>
        </>
    )
}

export default UserProfile;