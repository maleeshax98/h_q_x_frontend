import  { useState } from 'react'
import axios from "axios"
import useAuthContext from './useAuthContext'

export default function useSignup() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, userName, password) => {

        setError(null)
        setIsPending(true)

        try{
            
            const res = await axios.post(`http://localhost:4000/api/user/signup`, {
                email,
                userName,
                password
            })

            // console.log(res)
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({type: "LOGIN", payload: res.data})
            dispatch({type: "AUTH_IS_READY"})

            setIsPending(false)

        } catch (err) {
            setError(err.response.data.error)
            setIsPending(false)

        }
        
    }

    return { signup, error, isPending }
}
