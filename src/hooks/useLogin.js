import  { useState } from 'react'
import axios from "axios"
import useAuthContext from './useAuthContext'

function useLogin() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setError(null)
        setIsPending(true)

        try{
            
            const res = await axios.post(`http://localhost:4000/api/user/login`, {
                email,
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

    return { login, error, isPending }
}

export default useLogin