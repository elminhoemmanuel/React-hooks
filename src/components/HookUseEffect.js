import React, { useState, useEffect } from 'react'

const HookUseState = () => {

    const [count, setCount] =  useState(0);

    const incrementCount = () =>{
        setCount(prevState => prevState+1);
    }

    useEffect(() =>{
        document.title = `You clicked ${count} times`
    })

    return ( 
        <div>
            <button onClick={incrementCount}>click {count}times</button>
        </div>
     );
}
 
export default HookUseState;