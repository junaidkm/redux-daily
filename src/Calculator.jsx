import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  decrement, increment, multiplication, reset } from './CounterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [value, setValue] = useState("")

  const handleClick = (num) => {
    setValue(value + num)
  }

  return (
    <div>
      <h1>{count}</h1>

      <input  type="text" value={value} readOnly />

      <br /><br />

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
            <button
        onClick={() => {
          dispatch(increment(Number(value))) 
          setValue("") 
        }}
      >
        +
      </button>
      <br/>

      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
            <button 
          onClick={() => {
          dispatch(decrement(Number(value))) 
          setValue("") 
        }}>
            -
        </button>
      <br/>
 
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
            <button                                                                      s                                                                                             
        onClick={() => {
          dispatch(multiplication(Number(value))) 
          setValue("") 
        }}
      >
        *
      </button>
      <br/>

      <button onClick={() => handleClick("0")}>0</button>


      <button
        onClick={() => {
          dispatch( division(Number(value))) 
          setValue("")
        }}
      >
        /
      </button>


<br /> 
      <button
        onClick={() => {
          setValue("")
          dispatch(reset())
        }}
      >
        C
      </button>
    </div>
  )
}

export default Counter