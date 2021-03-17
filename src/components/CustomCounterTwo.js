import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

const CustomCounterTwo = () => {

    const [count,incrementCount, decrementCount, resetCount] = useCounter(0,1);

    return ( 
        <div>
            Count - {count}
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
     );
}
 
export default CustomCounterTwo;