import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuthContext from './useAuthContext'

function useUpdateQuiz() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [ data, setData ] = useState(null)
    const { user } = useAuthContext()

    const setDataFunc = async (correctAnswer, answer, docId) => {
        setIsPending(true)
        setError(null)
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/quizes/update`,{
                correctAnswer,
                answer,
                docId
            } ,config)
        
            try{
                // console.log(res)
                setData(res.data)
                setIsPending(false)

            } catch(err) {
                setError("Somthing went wrong")
                setIsPending(false)
            }
        } catch(err) {
            console.log(err)
            setError("Somthing went wrong")
            setIsPending(false)

        }
    }

    

    return { error, isPending, data, setDataFunc }
}

export default useUpdateQuiz