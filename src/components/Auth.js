import classes from "./Auth.module.css";
import store from "../store";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/authSlice";
import { useRef, useState } from "react";

const Auth = (props) => {
  const nameref = useRef();
  const store = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const nameupdate = nameref.current.value;
    dispatch(authAction.login());
    dispatch(authAction.nameupdate(nameupdate));
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={nameref} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
