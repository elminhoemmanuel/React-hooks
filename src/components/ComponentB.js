import React, { useContext } from 'react'
import {UserContext, WorkContext} from '../App'

const ComponentB = () => {

    const user = useContext(UserContext)
    const work = useContext(WorkContext)

    return ( 
        <div>
            {user} - {work}
        </div>
     );
}
 
export default ComponentB;