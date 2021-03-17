import React, { useState } from 'react'

const NameDisplay = () => {

    const [name, setName] = useState({firstName:"", lastName:""});

    const changeFirstName = e =>{
        setName({ ...name, firstName :e.target.value})
    }

    const changeLastName = e =>{
        setName({ ...name, lastName :e.target.value})
    }

    return ( 
        <div>
            <input type="text"  value={name.firstName} onChange={changeFirstName}/>
            <input type="text"  value={name.lastName} onChange={changeLastName}/>
            <h2>Your First name is ; {name.firstName}</h2>
            <h2>Your Last name is ; {name.lastName}</h2>
        </div>
     );
}
 
export default NameDisplay;