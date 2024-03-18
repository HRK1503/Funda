import React,{useState} from 'react'
import Dashboard from './Dashboard'

function Income() {
    const [sourceValue, setSourceValue] = useState('');

    const handleInputChange = (event) => {
      setSourceValue(event.target.value);
    };
  
    return (
        <>
            <div className='flex flex-row'>
                <Dashboard />
                <div className='bg-white rounded-3xl h-max w-[67%] my-10 ml-10'>
                    <div className='flex justify-center text-darkGreen'>
                        <p className='text-3xl mt-36'>Expenses</p>
                    </div>
                    <div className='flex justify-center mb-12'>
                        <div className='flex flex-col justify-center items-center bg-latestGreen rounded-3xl h-max my-10 w-1/2'>
                            <div className='bg-white rounded-3xl h-max mt-16 w-1/2'>
                                <p className='flex justify-center text-xl text-dullGreen py-5'>
                                    <input
                                        type='text'
                                        placeholder='Source'
                                        value={sourceValue}
                                        onChange={handleInputChange}
                                        className='w-3/4 focus:outline-none text-center'
                                    />
                                </p>                            </div>
                            <div className='bg-white rounded-3xl h-max my-8 w-1/2'>
                            <p className='flex justify-center text-xl text-dullGreen py-5'>
                                    <input
                                        type='text'
                                        placeholder='Add Amount'
                                        value={sourceValue}
                                        onChange={handleInputChange}
                                        className='w-3/4 focus:outline-none text-center'
                                    />
                                </p> 
                            </div>
                            <button type="button" className="text-white hover:text-darkGreen bg-darkGreen hover:bg-white border rounded hover:border-darkGreen hover:border-2 px-8 py-2 text-xl w-1/4 mb-16">Add</button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Income