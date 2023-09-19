import { useEffect, useState } from "react"
import useAuthContext from "./useAuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function useAddPost() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const navigate = useNavigate()

    

    const add = async (caption ,img) => {
        setIsPending(true)
        setError(null)
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/posts`, 
            {
                caption,
                img
            },
            config
            )
            console.log(res)
            setIsPending(false)
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch(err) {
            setError("Somthing went wrong")
            setIsPending(false)

        }
    }
    return { error, isPending, add }
}

export default useAddPost