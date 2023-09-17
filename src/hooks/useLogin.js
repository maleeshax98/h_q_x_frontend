import  { useState } from 'react'
import axios from "axios"
import useAuthContext from './useAuthContext'
import OneSignal from 'react-onesignal';

function useLogin() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setError(null)
        setIsPending(true)

        try{
            await OneSignal.init({ appId: 'c07c00f1-6f5c-4f0b-bf4e-6114fb77de76'});
            OneSignal.Slidedown.promptPush();
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/login`, {
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
