import React from 'react'

function About() {
  return (
    <div className='m-[50px] mb-[150px]'>
      <h1 className="font-bold  text-xl">About App</h1>

      <h1 className='text-2xl mt-[10px] text-center font-bold text-blue-900'>Welcome to our History Quiz X!</h1>

      <p className='mt-[20px] text-sm md:text-md'>Welcome to history quizer x by our history enthusiast and teacher, <span className='font-semibold'>Mr. Wihanga Dissanayake</span>, who guides students in grades 9, 10, and 11 on a journey to explore the past.</p>

      <h1 className='font-semibold text-lg mt-[30px]'>Why History Quiz X?</h1>

      <p className='mt-[20px] text-sm md:text-md text-gray-800'>With us, you'll embark on a thrilling daily journey through comprehensive history quizzes. Answer correctly to earn stars and climb the ranks on the leaderboard.

        But that's not all! You also have the unique opportunity to receive expert guidance from none other than Mr. Wihanga Dananjaya himself.

        Unleash your history knowledge, rise in the ranks, and gain insights from a true history expert. Join us today and be a part of the ultimate history quiz experience!

        </p>
      <h1 className='text-center font-bold text-md text-blue-900  mt-[20px]'>Join us in unraveling history's mysteries!</h1>

        <div className='text-center items-center mt-[40px]'>
          <div>
            <center>
                  <img className='w-[150px] rounded-full' src="../img/wihanga.jpg" alt="" />
            </center>
            <h1 className='text-center font-semibold  mt-[10px]'>Mr.Wihanga Dissanayake</h1>
            <p className='text-sm text-gray-400'>ඓතිහාසික වටිනාකම් ගවේෂණය</p>
            <h1 className='text-center font-semibold mt-[10px] text-blue-600'>Contact - +94 77 623 6779</h1>
            <button className='bg-green-400'>Join Whatsapp Group</button>
          </div>
        </div>

      <div className='mt-[30px]'>
        <h1 className="font-bold  text-xl">About Developers</h1>
        <p>Developed by Xmart Code</p>
        <center>
          <img className='w-[150px] rounded-full' src="../img/maleesha.jpg" alt="" />
        <h1 className='text-center font-semibold  mt-[10px]'>Maleesha Nayanashan</h1>
        <p className='max-w-[450px] text-center mt-[10px] text-gray-500 text-sm'>  I'm Maleesha, and Mr.Wihanga Dissanayake is simply the best history teacher ever. His history expertise is unmatched, and his life advice is priceless. Learning from him is a beautiful journey.</p>
        
        <div className='mt-[80px]'>
        <img className='w-[100px] rounded-full' src="../img/xmart.jpg" alt="" />
         <p>This website and app is developed by Xmart Code</p>
        </div>
        </center>
      
      </div>

    </div>
  )
}

export default About