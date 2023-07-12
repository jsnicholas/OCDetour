import UserInfo from "../components/userProfile/userInfo";
import UserStats from "../components/userProfile/userStats";
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';



function UserProfile() {

    const { loading, data } = useQuery(ME);
    // console.log(`User data: ${JSON.stringify(data)}`);

    // check if the user has data, if so display it
    const numOfActivities = data?.me || [];

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
                    totalActivities={numOfActivities?.savedActivities?.length}
                    totalFocusTime="30m"
                />
            </section>
        </>
    )
}

export default UserProfile;