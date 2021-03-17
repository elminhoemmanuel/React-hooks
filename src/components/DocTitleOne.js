import React, { useEffect, useState} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle';


const DocTitleOne = () => {

    const [count, setCount] =  useState(0);

    useDocumentTitle(count);

    return ( 
        <div>
            Count - {count}
            <button onClick = {() =>setCount(count +1)}>Increase count</button>
        </div>
     );
}
 
export default DocTitleOne;