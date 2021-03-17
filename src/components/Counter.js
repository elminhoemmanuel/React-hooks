import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("UseEffect updating happening")
        document.title = `You clicked ${count} times`
    },[count])

    const incrementCount = () =>{
        setCount(prevState => prevState+1);
    }

    const decrementCount = () =>{
        setCount(prevState => prevState-1);
    }

    const changeName = e =>{
        setName(e.target.value)
    }


    return ( 
        <div>
            <input type="text" value={name} onChange={changeName}/>
            <button>clicked {count} times</button>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
     );
}
 
export default Counter;