import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuthContext from './useAuthContext'

function useGetSingleData(id) {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [ data, setData ] = useState(null)
    const [ won, setWon ] = useState(false)
    const [ faild, setFaild ] = useState(false)
    const [ wonNames, setWonUsers ] = useState([])
    const [ faildNames, setfaildUsers ] = useState([])
    const { user } = useAuthContext()

    const getData = async (id) => {
        setIsPending(true)
        setError(null)
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/quizes/${id}`, config)
        
            try{
                // console.log(res)
                setData(res.data)

                // checking correct
                let wonUsers = res.data.correct
                wonUsers.forEach((u) => {
                    if(u._id === user.uId){
                        setWon(true)
                        return ""
                    }

                })
                let temp = []
                wonUsers.forEach(u => {
                    temp.push(u.userName)
                })
                // console.log(temp)
                setWonUsers(temp)

                // checking faild
                let faildUsers = res.data.faild
                faildUsers.forEach((u) => {
                    if(u._id === user.uId){
                        setFaild(true)
                        return
                    }
                })

                let temp2 = []
                faildUsers.forEach(u => {
                    temp2.push(u.userName)
                })
                // console.log(temp)
                setfaildUsers(temp2)

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
        getData(id)
    }, [])

    return { error, isPending, data, won, faild, wonNames, faildNames }
}

export default useGetSingleData