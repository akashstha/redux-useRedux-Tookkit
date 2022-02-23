import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const store = useSelector((state) => state.auth);
  return (
    <main className={classes.profile}>
      <h2>My User Profile : {store.name}</h2>
    </main>
  );
};

export default UserProfile;
