import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import { Link } from "react-router-dom"

function Signup() {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { signup, error, isPending } = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        signup(email, userName, password)
    }

    return (
        <div className='mb-[150px]'>
            <form onSubmit={handleSubmit} className='  flex items-center justify-center flex-wrap mt-[10vh]'>
                <div className=''>
                    <center>
                        <h1 className='font-semibold text-3xl text-blue-950'>History Quizer X</h1>
                        <p className='text-sm md:text-md text-gray-600 font-bold'>ඓතිහාසික වටිනාකම් ගවේෂණය</p>
                        <img className='w-[150px] lg:w-[20%] mb-[50px] mt-[20px] rounded-full' src="./img/logo.jpg" alt="" />
                    </center>
                </div>
                <div className='' >
                        <h1 className='font-semibold text-3xl  text-center text-blue-950'>Sign Up</h1>
                        {error && <p className='error'>{error}</p>}
                        <p className='text-left mt-[20px]'>Email</p>
                        <input 
                        type="text" 
                        className='login-input'
                        onChange={ (e) => { setEmail(e.target.value)} }
                        />
                        <p className='text-left mt-[20px]'>Username</p>
                        <input 
                        type="text" 
                        className='login-input'
                        onChange={ (e) => { setUserName(e.target.value)} }
                        
                        />
                        <p className='text-left mt-[20px]'>Password</p>
                        <input 
                        type="password" 
                        className='login-input '
                        onChange={ (e) => { setPassword(e.target.value)} }
                        
                        />
                        <center>
                        {isPending ? <button disabled>Loading</button> : <button>Sign Up</button>}
                    </center>
                    <Link to={"/login"}>
                        <p className='mt-[10px]'>Already have an acount? Login here</p>
                    </Link>
                </div>
                
                
            </form>
        </div>
  )
}

export default Signup