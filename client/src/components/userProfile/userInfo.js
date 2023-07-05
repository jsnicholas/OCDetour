function UserInfo(props) {
    return (
        <>
            <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={props.userAvatar} alt="User Avatar" />
                </div>
            </div>
        </>
    )
}

export default UserInfo;