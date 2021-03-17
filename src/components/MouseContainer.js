import React, { useState } from "react";
import MouseHook from "./MouseHook";

const MouseContainer = () => {

    const [display, setDisplay] = useState(true);

    const toggleDisplay = () =>{
        setDisplay(!display)
    }

    return ( 
        <div>
            <button onClick={toggleDisplay}>toggle display</button>
            {display && <MouseHook />}
        </div>
     );
}
 
export default MouseContainer;