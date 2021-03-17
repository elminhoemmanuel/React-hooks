import React, { useEffect, useState } from 'react'

const MouseHook = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("Updating")
        window.addEventListener("mousemove" , logMousePosition)

        return () =>{
            console.log("unmounting")
            window.removeEventListener("mousemove" , logMousePosition)
        }
    },[])

    return ( 
        <div>
            X - {x} and Y - {y}

        </div>
     );
}
 
export default MouseHook;