import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://finalspaceapi.com/api/v0/character')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>List Post</h1>
            {posts && posts.map(post => <h3 key={post.id}>Name :{post.name} and Status :{post.status}</h3>)}
        </>
        )
}

export default DataFetching