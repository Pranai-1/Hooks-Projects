import { useState } from "react"


function UseEffect(){
    const[color,setColor]=useState('Black')
return(
    <>
    <div className=" h-screen w-screen" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-20 left-0 right-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 py-2 rounded-3xl">
        <button className='text-white bg-red-600 rounded p-2 m-1' onClick={() => setColor("red")} >Red</button>
        <button className='text-white bg-green-600 rounded p-2 m-1' onClick={() => setColor("Green")}>Green</button>
        <button className='text-white bg-pink-600 rounded p-2 m-1' onClick={() => setColor("Pink")}>Pink</button>
        <button className='text-white bg-yellow-600 rounded p-2 m-1' onClick={() => setColor("Yellow")}>Yellow</button>
        <button className='text-white bg-orange-600 rounded p-2 m-1' onClick={() => setColor("Orange")}>Orange</button>
    
    </div>
    </div>
    </div>
   
    </>
)
}
export default UseEffect