import React, { useState } from 'react'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModal from './ImageModal';

function Post({ caption, img, date }) {
    // const [img, setImg] = useState(img)
    const [showImage, setShowImage ] = useState(false)
    const dateObject  = new Date(date);
    const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Month is zero-indexed, so add 1
  const day = dateObject.getDate();

  // Format the date as a string (e.g., "2023-09-13")
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return (
        <div className='mt-[20px] p-[10px] border-2 rounded-xl'>
            {showImage && (
                <ImageModal img={img} setShowImage={setShowImage} />
            )}
            <div>
                <p className='mb-[5px] text-sm font-light text-gray-600'>{formattedDate}</p>
                <p className='mb-[5px] text-sm md:text-md font-semibold text-gray-600'>{caption}</p>
                <div className='md:w-[340px] md:h-[318px] max-w-[340px] max-h-[318px] bg-black overflow-hidden rounded-lg cursor-pointer' onClick={() => {
                    setShowImage( (prev) => !prev)
                }}>
                    <img src={img} className='object-cover w-full h-full' alt="" />
                </div>
                    {/* <FontAwesomeIcon className='' icon={faThumbsUp} /> */}
            </div>
        </div>
    )
}

export default Post