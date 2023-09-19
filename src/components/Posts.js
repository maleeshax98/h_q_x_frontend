import React from 'react'
import Post from './Post'
import useGetAllPosts from '../hooks/useGetAllPosts';

function Posts() {
  const { error, isPending, data } = useGetAllPosts()

  return (
    <div className='mb-[150px]'>
        <div>
            
              { isPending && <p><img src="./loading.gif" className='w-[150px]' alt="" /></p>}
              {error && <p className='error'>{error}</p>}

              { !isPending && data && !error && (
                <div className='mt-[30px]'>
                    {data.map((e, index) => (
                      <Post key={index} caption={e.caption} img={e.img} date={e.createdAt}/>
                    ))}
                </div>
              ) }
                
        </div>
    </div>
  )
}

export default Posts