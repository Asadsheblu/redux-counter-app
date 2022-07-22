import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { decrementCount, incrementCount, reset } from '../Services/Action/counterAction';
const Counter = () => {
  const count=useSelector((state)=>state.count)
  const dispatch=useDispatch()
    const handelIncrement=()=>{
        dispatch(incrementCount())
    }
    const handelDecrement=()=>{
        dispatch(decrementCount())
    }
    const handelReset=()=>{
        dispatch(reset())
    }
    
    return (
        <div>
            <h1>Counter App</h1>

            <h3>Count:{count}</h3>
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDecrement}>Decrement</button>
            <button onClick={handelReset}>Reset</button>
           
        </div>
    );
};

export default Counter;