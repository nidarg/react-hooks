import React,{useState, useEffect} from 'react'

const FetchData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        (async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const fetchedData = await res.json()
            if(fetchedData && fetchedData.length){
                setData(fetchedData)
            }
        })()  
    },[])
  return (
    <div>
      <ul>
        {data.map(item=>
            <li key={item.id}>{item.title}</li>
        )}
      </ul>
    </div>
  )
}

export default FetchData
