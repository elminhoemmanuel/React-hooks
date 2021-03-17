import React, {useReducer} from 'react'

const initialState = {
    firstValue:0,
    secondValue:0
};

const reducer = (state, action) =>{
    switch (action.type){
        case "Increment":
            return {...state, firstValue:state.firstValue + action.value}
        case "Decrement":
            return {...state, firstValue:state.firstValue - action.value}
        case "Increment2":
            return {...state, secondValue:state.secondValue + action.value}
        case "Decrement2":
            return {...state, secondValue:state.secondValue - action.value}
        case "Reset":
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return ( 
        <div>
            <div>Count is - {count.firstValue}</div>
            <div>Count is - {count.secondValue}</div>
            <div>
                <button onClick={() =>{dispatch({type:"Increment", value:1})}}>
                    Increment
                </button>
                <button onClick={() =>{dispatch({type:"Decrement", value:1})}}>
                    Decrement
                </button>
                <button onClick={() =>{dispatch({type:"Increment", value:5})}}>
                    Increment 5
                </button>
                <button onClick={() =>{dispatch({type:"Decrement", value:5})}}>
                    Decrement 5
                </button>
            </div>
            <div>
                <button onClick={() =>{dispatch({type:"Increment2", value:2})}}>
                    Increment2
                </button>
                <button onClick={() =>{dispatch({type:"Decrement2", value:2})}}>
                    Decrement2
                </button>
            </div>
            <button onClick={() =>{dispatch({type:"Reset"})}}>Reset</button>
        </div>
     );
}
 
export default CounterTwo;