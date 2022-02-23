import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Component, useState } from "react";
import { counterAction } from "../store/counterSlice";

const Counter = () => {
  const storestate = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.showCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{storestate.show ? storestate.counter : ""}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment ny 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStoreToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapStoreToDispatch = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
export default Counter;
// export default connect(mapStoreToProps, mapStoreToDispatch)(Counter);
