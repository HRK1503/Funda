import logo from '../images/logonew.png'
import bg_image from '../images/landing-page.png'
function Homepage(){
    return <>
            <div className='relative z-10'>
                <img src={bg_image} className='h-svh w-[100%] absolute inset-0'  />
                
            </div>
            <div className='relative z-20'>
            <div className='w-1/4 mx-auto pt-32'>
                <img src={logo} alt="Funda logo"/>
            </div>
            <div className='flex justify-center my-9'>
                <p className='text-darkGreen text-3xl'>Finance ka Funda</p>
            </div>
            <div className='flex justify-center my-16'>
                <button type="button" className="text-white hover:text-darkGreen bg-darkGreen hover:bg-white border rounded hover:border-darkGreen hover:border-2 px-12 py-2 text-3xl">Login</button>
            </div>
            <div className='flex justify-center text-lightGreen text-xl'>
                <p>New to the website?  <b><u>Sign up</u></b></p>
            </div>
            </div>
    </>
}

export default Homepage;