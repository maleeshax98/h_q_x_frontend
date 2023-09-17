import { useEffect, useState } from "react"
import useAuthContext from "./useAuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function useAddQuiz() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const navigate = useNavigate()

    

    const add = async (a1, a2, a3, a4, q, correct) => {
        
        setIsPending(true)
        setError(null)
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/quizes`, 
            {
                a1,
                a2,
                a3,
                a4,
                correct,
                q
            },
            config
            )
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

export default useAddQuiz