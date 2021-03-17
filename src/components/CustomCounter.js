import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

const CustomCounter = () => {

    const [count,incrementCount, decrementCount, resetCount] = useCounter(5, 5);

    return ( 
        <div>
            Count - {count}
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
     );
}
 
export default CustomCounter;