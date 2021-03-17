import React, { useContext } from 'react'
import {CounterContext} from '../App'

const ComponentO = () => {

    const countContext = useContext(CounterContext)

    return ( 
        <div>
            ComponentO - {countContext.countState}
            <button onClick = {() =>{countContext.countDispatch("Increment")}}>Increment</button>
            <button onClick = {() =>{countContext.countDispatch("Decrement")}}>Decrement</button>
            <button onClick = {() =>{countContext.countDispatch("Reset")}}>Reset</button>
        </div>
     );
}
 
export default ComponentO;