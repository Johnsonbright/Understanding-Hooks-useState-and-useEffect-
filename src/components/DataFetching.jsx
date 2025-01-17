import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [button, setButton] = useState(1);
console.log('post', post)

  const handleclick= () => setId(id)
  useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      console.log(res)
      setPost(res.datas)
    })
    .catch(err => 
      console.log(err))
  }, [id])
  return (
    <div>

      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button type='button ' onClick={handleclick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {
          posts.map(post => <li key ={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}
