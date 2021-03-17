import React, {useState} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'


const DocTitleTwo = () => {

    const [count, setCount] =  useState(0);

    useDocumentTitle(count);

    return ( 
        <div>
            Count - {count}
            <button onClick = {() =>setCount(count +1)}>Increase count</button>
        </div>
     );
}
 
export default DocTitleTwo;