import React from 'react'
import useGetLeaderbaord from '../../hooks/useGetLeaderbaord'
import AnimationWrapper from "../../components/AnimationWrapper.js"
function Leaderbaord() {
    const { error, isPending, data } = useGetLeaderbaord()
    console.log(data)
    return (
        <AnimationWrapper>
        <div className='flex justify-center  max-h-[70vh] overflow-auto'>
            { isPending && <div><img src="../icons/loading.gif" className='w-[150px]'  alt="" /></div>}
            { !isPending && data && !error && (
                <div className='border-2 border-yellow-400 rounded-lg m-[20px] '>
                    <center>
                        <img className='w-[50px] mt-[40px]' src="../icons/trophy2.svg" alt="" />
                        <h1 className='text-xl font-semibold text-center mb-[40px] mt-[10px]'>Leaderbaord</h1>
                    </center>

                    {
                        data.map((e, index) => (
                            <div key={index} className='flex justify-left gap-4 m-[10px]'>
                                <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                                <div  >
                                    { index === 0 ? (
                                        <div className='flex gap-2 items-center'>
                                            <p className='font-bold text-yellow-500  text-xl text-center'>{`${index + 1}  `}{e.userName}</p>
                                            <p className='font-bold text-yellow-500 text-xl text-center'>{e.wins}</p>
                                            <img className='w-[30px]' src="../icons/star.svg" alt="" />
                                        </div>
                                    ): (
                                        <div className='flex gap-2  items-center font-semibold'>
                                            <p>{`${index + 1}  `}{e.userName}</p>
                                            <p>{e.wins}</p>
                                            <img className='w-[20px]' src="../icons/star2.svg" alt="" />

                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
        </AnimationWrapper>
    )
}

export default Leaderbaord