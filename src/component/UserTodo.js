import React, { useState, useEffect } from 'react';
import * as actions from '../store/user'
import {
    useSelector,
    shallowEqual,
    // , useDispatch
} from "react-redux";


const User = () => {
    // whole store
    // const todoList = useSelector(state => state)

    //only seperate entity from store
    const userCounter = useSelector(state => state.entities.user, shallowEqual)
    // console.log("ll", userCounter)
    // const dispatch = useDispatch();
    // const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("********changes in USER Counter *************")
    });

    const decRedux = () => {
        actions.decrementCounter();
    }

    const incRedux = () => {
        actions.incrementCounter();
    }

    return (
        <div className="container-fluid bg-primary text-center py-4 text-white">
            <button onClick={decRedux}>Decrement</button>
            {userCounter}
            <button onClick={incRedux}>Increment</button>

        </div>
    );
}

export default React.memo(User);