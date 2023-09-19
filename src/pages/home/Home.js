import React, { useEffect, useState } from 'react'
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
import Posts from '../../components/Posts';
const sections = ['Quize', 'Posts']
function Home() {
  const { error, isPending, data } = useGetallData()
  const { user } = useAuthContext()
  const { data: top } = useGetLeaderbaord()
  const [ selected, setSelected ] = useState("Quize")
  
  return (
    <AnimationWrapper>
      <div>
            
          <div className=' ml-[10px] mt-[10px] relative mb-[50px]'>
            <p className='text-sm'>Top student:</p>
            <div className='flex gap-2 m-[10px] bg-gray-100 rounded-full p-[10px] absolute font-semibold'>  
                <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                { top.length !== 0 ? top[0].userName : "" }
            </div>
          </div>
          <center>
              <Link to={"https://api.whatsapp.com/send/?phone=%2B94776236779&text=I%20need%20to%20join%20class&type=phone_number&app_absent=0"}>
                <img src="./img/cover.png" className='w-[80vw] md:w-[50vw] max-w-[478px] mt-[70px] md:mt-[-60px] rounded-2xl' alt="" />
              </Link>
              {/* <h1 className='font-bold text-md md:text-lg  text-center mt-[10px] md:mt-[10px]'>ඓතිහාසික වටිනාකම් ගවේෂණය.</h1> */}
            </center>
          { !isPending && <div className='mt-[30px]'>
              <center>
                <ul className='flex gap-3 font-semibold justify-center'>
                  {sections.map((e) => (
                    <li className={ selected === e ? "border-b-4 border-blue-600 cursor-pointer" : "cursor-pointer"} onClick={() => {setSelected(e)}}>
                      {e}
                    </li>
                  ))}
                </ul>
              </center>
            </div>}
          <div  className='flex flex-wrap w-[100%] gap-4 p-[10px] justify-center mb-[150px]'>
          { isPending && <p><img src="../icons/loading.gif" className='w-[150px]' alt="" /></p>}
          {error && <p className='error'>{error}..Logout and try again</p>}

          { !isPending && data && !error && selected === "Quize" && (
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
          {selected === "Posts" && (
            <>
              <Posts />
            </>
          )}
          {/* <Quize /> */}

          </div>
          
      </div>
    </AnimationWrapper>
  )
}

export default Home