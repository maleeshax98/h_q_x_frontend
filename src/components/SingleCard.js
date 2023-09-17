import React from 'react'
import { faTrophy, } from '@fortawesome/free-solid-svg-icons';

function SingleCard({ q, date }) {
    const dateObject  = new Date(date);
    const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Month is zero-indexed, so add 1
  const day = dateObject.getDate();

  // Format the date as a string (e.g., "2023-09-13")
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return (
        <div className='border-2 max-w-[450px] min-w-[90vw] md:min-w-[450px] m-[10px] rounded-lg p-[20px] cursor-pointer hover:border-blue-600'>
            <div className=''>
                <div className='flex gap-4 items-center'>
                    <img src="./icons/q.svg"  className='w-[30px]' alt="" />
                    <p className='text-sm'>{formattedDate}</p>
                </div>
            </div> 
            <div className='mt-[10px]'>
                <h1 className='font-semibold text-lg'>{q}</h1>
            </div>
            <div>
                <p>Answers - 48</p>
            </div>     
        </div>
    )
}

export default SingleCard