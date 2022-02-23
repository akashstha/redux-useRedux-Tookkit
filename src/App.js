import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state.auth);
  console.log("%c store", "background: green;padding: 2px", store);
  let names;
  const nameHandler = (name) => {
    names = name;
  };
  return (
    <>
      {store.isAuth && <Headers />}
      {store.isAuth && <UserProfile names={names} />}
      {!store.isAuth && <Auth nameHandler={nameHandler} />}
      <Counter />
    </>
  );
}

export default App;
