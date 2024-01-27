import { store } from "@/app/store";

const ProfileBar = () => {
    const {user} = store.getState().user;
    return (<h3>
        Active User:<b>{user.name}</b>
    </h3>
    )
}

export default ProfileBar;