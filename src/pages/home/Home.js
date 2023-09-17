import React, { useEffect } from 'react'
import SingleCard from '../../components/SingleCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Quize from '../../components/Quize';
import useGetallData from '../../hooks/useGetallData';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useGetLeaderbaord from '../../hooks/useGetLeaderbaord';
import AnimationWrapper from '../../components/AnimationWrapper';
import OneSignal from 'react-onesignal';

function Home() {
  const { error, isPending, data } = useGetallData()
  const { user } = useAuthContext()
  const { data: top } = useGetLeaderbaord()

  
  
  
  return (
    <AnimationWrapper>
      <div>
          <div className='m-[10px] relative mb-[50px]'>
            <p className='text-sm'>Top student:</p>
            <div className='flex gap-2 m-[10px] bg-gray-100 rounded-full p-[10px] absolute font-semibold'>  
                <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                { top.length !== 0 ? top[0].userName : "" }
            </div>
          </div>
          <div  className='flex flex-wrap w-[100%] gap-4 p-[10px] justify-center mb-[150px]'>
          { isPending && <p><img src="../icons/loading.gif" className='w-[150px]' alt="" /></p>}
          { !isPending && data && !error && (
            <>
              { data.map(doc => (
                <Link to={`/view/${doc._id}`} key={doc._id}>
                  <SingleCard 
                  q={doc.question}
                  date={doc.createdAt}
                  />
                </Link>
              ))}
            </>
          )}
          {/* <Quize /> */}
          </div>
          
      </div>
    </AnimationWrapper>
  )
}

export default Home