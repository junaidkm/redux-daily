import { useDispatch ,useSelector } from "react-redux";
import { increment } from "./CounterSlice";

function Counters() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <>
    <h1>{count}</h1>

    <button onClick={() => dispatch(increment(1))}>
      Increment
    </button> 
  </>);
}

export default Counters