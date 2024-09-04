import React from 'react'
import {useEffect,useState} from 'react'
 function Fetchdata() {
   const [data,setData] = useState([]);
   const [limit, setLimit] = useState(15);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.todos);
        setData(data.todos);
    })
  }, [])
  console.log(data.todos)
  return (
    <div>
        <ul className='text-black p-[10px] '>
            {
             data.slice(0, limit).map((val,index)=>{
                return(
                    <li key={index}>{val.todo}</li>
                )
             })
            }
           
        </ul>
    </div>
  )
}

export default Fetchdata