import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () =>{
        setIdFromButton(id);
    }

    useEffect(() =>{
        axios
            .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                console.log(res.data)
                setPost(res.data)
                
            })
            .catch(err =>{
                console.log(err)
            })
    },[idFromButton])

    return ( 
        <div>
            <input type="text" value={id} onChange={e =>{setId(e.target.value)}}/>
            <button type="button" onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
            
            {/* <ul>
                {posts.map((post) => {
                    <li key={post.id}>{post.title}</li>
                })}
            </ul> */}
        </div>
     );
}
 
export default DataFetching;