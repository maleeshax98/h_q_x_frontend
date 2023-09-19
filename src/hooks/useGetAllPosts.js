import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuthContext from './useAuthContext'

function useGetAllPosts() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [ data, setData ] = useState([])
    const { user } = useAuthContext()

    const getData = async () => {
        setIsPending(true)
        setError(null)
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/posts`, config)
        
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

    useEffect(() => {
        getData()
    }, [])

    return { error, isPending, data }
}

export default useGetAllPosts