import axios from 'axios'
import  { useState } from 'react'
import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';


function useCheckAdmin() {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [isReady, setIsReady ] = useState(false)
    const checkAdmin = async () => {
        try{
            const config = {
                headers: {
                'Authorization': `Bearer ${user.token}`,
                },
            };
            
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/quizes/userType`,config)
            
            if(res.status === 201 ){
                setIsReady(true)
            }

        } catch(err){
            navigate("/home")
        }
    }

    return { checkAdmin, isReady }
}

export default useCheckAdmin