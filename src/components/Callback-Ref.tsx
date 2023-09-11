import { useCallback, useEffect, useRef, useState } from "react";

function Callback(){
    const [length, setLength] = useState<number>(8);
    const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
    const [charAllowed, setCharAllowed] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
        for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
          
        }
    
        setPassword(pass)
    
    
      }, [length, numberAllowed, charAllowed, setPassword])


      useEffect(() => {
        passwordGenerator()
      }, [length, numberAllowed, charAllowed, passwordGenerator])

      const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.focus()
        // if(passwordRef.current!=null)passwordRef.current.style.backgroundColor="red"
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999); //not necessary but it is a property
        window.navigator.clipboard.writeText(password)
      }, [password])
      
    
    return(
        <>
        <div className='bg-black h-screen w-screen '>
            <div className='flex justify-center  p-10'>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
               <h1 className='text-white text-center my-3'>Password generator</h1>
               <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className=" w-full py-1 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                
                    />
                    <button
                    className=' bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}
                    >copy</button>
        
                </div>
                <div className='flex items-center gap-x-1'>
                        <input 
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                           onChange={(e) => {setLength(Number(e.target.value))}}
                        />
                    <label>Length: {length}</label>
                    <input
                        type="checkbox"
                        id="numberInput"
                        defaultChecked={numberAllowed}
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                         }}
                    />
                     <label htmlFor="numberInput">Numbers</label>
                    <input
                         type="checkbox"
                         defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                             setCharAllowed((prev)=>!prev)
                        }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                        
                </div>
                

                    </div>
                    </div>
        </div>
        </>
    )
}
export default Callback