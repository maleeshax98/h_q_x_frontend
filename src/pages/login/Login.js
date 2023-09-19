import { useState } from 'react'
import { Link } from "react-router-dom"
import useLogin from '../../hooks/useLogin'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, isPending, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className='mb-[150px]'>
            <form onSubmit={handleSubmit} className='  flex items-center justify-center flex-wrap mt-[10vh]'>
                <div className=''>
                    <center>
                        <h1 className='font-semibold text-3xl text-blue-950'>History Quizer X</h1>
                        <p className='text-sm md:text-md text-gray-600 font-bold'>ඓතිහාසික වටිනාකම් ගවේෂණය</p>
                        <img className='w-[150px] md:w-[20%] mb-[50px] mt-[20px] rounded-full' src="./img/logo.jpg" alt="" />
                    </center>
                </div>
                <div className='' >
                        <h1 className='font-semibold text-3xl  text-center text-blue-950'>Login</h1>
                        {error && <p className='error'>{error}</p>}
                        <p className='text-left mt-[20px]'>Email</p>
                        <input 
                        type="text" 
                        className='login-input'
                        onChange={ (e) => { setEmail(e.target.value)} }
                        />
                        <p className='text-left mt-[20px]'>Password</p>
                        <input 
                        type="password" 
                        className='login-input '
                        onChange={ (e) => { setPassword(e.target.value)} }
                        
                        />
                        <center>
                        {isPending ? <button disabled>Loading</button> : <button>Login</button>}
                        
                    </center>
                    <Link to={"/signup"}>
                        <p className='mt-[10px]'>No acount yet? Register</p>
                    </Link>
                </div>
                
                
            </form>
        </div>
    )
}

export default Login