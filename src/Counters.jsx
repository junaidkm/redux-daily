import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";
import { setUser } from "./UserSlice";

function Counter() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleclick = () => {
    dispatch(setUser(name)) 
    setName("")
  } 
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user); 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1> 

      <button onClick={() => dispatch(increment())}>
        Increment +
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter user value"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={handleclick}>
        Set Use
      </button>

      <h3>User: {user}</h3>
    </div>
  );
}

export default Counter;