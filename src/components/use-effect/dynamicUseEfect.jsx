import React,{ useState, useEffect} from 'react'

const DynamicUseEfect = () => {
    const[value,setValue] = useState(0)
    useEffect(()=>{
        console.log('use effect called')
        document.title = value
        
    },[value])
  return (
    <div>
        <h1>Value {value}</h1>
      <button onClick={()=>setValue(value + 1)}>change value</button>
    </div>
  )
}

export default DynamicUseEfect
