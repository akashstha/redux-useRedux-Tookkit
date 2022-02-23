import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authAction } from "../store/authSlice";

const Header = () => {
  const store = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={clickHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
