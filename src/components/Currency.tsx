import { useState } from "react"

function Currency(){
    const [currency, setCurrency] = useState<number | null>(null);
    const[convertedCurrency,setConvertedCurrency]=useState<number | null>(null)
    const[from,setFrom]=useState<string>("USD")
    const[to,setTo]=useState<string>("INR")

     function handleSubmit(){
        if(currency!=null){
        if(from=="USD")
        setConvertedCurrency(currency*82.865)
       else
       setConvertedCurrency(currency/82.865)
        }
     }

     const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = parseFloat(inputValue);
        
        if (!isNaN(numericValue)) {
          setCurrency(numericValue);
        } else {
          setCurrency(null);
        }
      };
  
      function handleSwap(){
          setFrom(to)
          setTo(from)
          if(currency!=null){
              setConvertedCurrency(currency)
          }
          
          setCurrency(convertedCurrency)
        }
    return(
        <>
        <div className='h-screen w-screen flex justify-center items-center bg-black'>
        <div className=' rounded-lg h-max w-max  bg-indigo-200 px-5 py-4 relative z-10'>
            <h1 className='font-bold text-xl text-blue-600 flex justify-center pb-2'>Currency Converter</h1>
            <div className='flex justify-between bg-white rounded-lg mb-4 p-2'>
                <div className=' rounded-lg mt-2 m-2'>
                <div className=' font-medium text-sm text-gray-400 pl-1'>From</div>
                <input
                    type="number"
                    value={currency === null ? '' : currency} // Display an empty string if currency is null
                    onChange={handleCurrencyChange}
                    className='bg-slate-100 rounded-lg p-1 mt-1'
                />
                </div>
                
                <div className=' rounded-lg mt-2'>
                <div className=' font-medium text-sm text-gray-400 pr-1'>Currency Type</div>
                <select className="bg-slate-100 rounded-lg p-1 mt-1 ml-5">
                    <option value="option1">{from}</option>
                  
                </select>
                </div>
            </div>

            <div className="absolute top-28 right-32 mt-4 mr-3">
                <button className="font-bold text-white bg-blue-700 rounded-lg px-2 py-1"
                onClick={handleSwap}
                >Swap</button>
            </div>


            <div className='flex justify-between bg-white rounded-lg p-2'>
                <div className=' rounded-lg mt-2 m-2'>
                <div className=' font-medium text-sm text-gray-400 pl-1'>TO</div>
                <input type="number" value={convertedCurrency === null ? '' : convertedCurrency}   className='bg-slate-100 rounded-lg p-1 mt-1'/>
                </div>
                <div className=' rounded-lg mt-2'>
                <div className=' font-medium text-sm text-gray-400 pr-1'>Currency Type</div>
                <select className="bg-slate-100 rounded-lg p-1 mt-1 ml-5">
                    <option value="option1">{to}</option>
                </select>
                </div>
            </div>
            <button className='h-full w-full bg-blue-600 text-xl font-normal text-white p-1 mt-2 rounded-lg text-center mr-4'
            onClick={handleSubmit}
            >Convert {from} to {to}</button>
        </div>
        </div>
        </>
    )
}
export default Currency