import React from 'react'
import logo from '../images/logonew.png'

function Loginpage() {
    return (
        <>
            <div className='mx-auto bg-white rounded-3xl h-max w-11/12 mt-10'>
                <div className='flex flex-row'>
                    <div className='my-48 ml-44'>
                        <img src={logo} alt='logo' className='w-2/5'></img>
                    </div>
                    <div className='text-darkGreen flex justify-center'>
                        <p>Sign in to your account</p>
                        <div className=''>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Loginpage