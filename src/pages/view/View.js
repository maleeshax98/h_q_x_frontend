import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useGetSingleData from '../../hooks/useGetSingleData';
import Quize from '../../components/Quize';
const test = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
function View() {
    let { id } = useParams();
    const { error, data, isPending, won, faild, wonNames, faildNames } = useGetSingleData(id)
    const [ show, setShow ] = useState("Won")   
    const navigate = useNavigate()
    if(error){
        navigate("/")
    }

    return (
        <div>
            <div className='flex flex-wrap gap-4 p-[10px] justify-around items-center mb-[10px]'>
                { isPending && <p><img src="../icons/loading.gif" className='w-[150px]'  alt="" /></p>}
                { !isPending && data && !error && (
                <>
                    <Quize
                        q={data.question}
                        answers={data.answers}
                        correct={data.correctAnswer}
                        docId={data._id}
                        won={won}
                        faild={faild}
                    />
                </>
                )}
                {!isPending && ( 
                    <>
                        <div className=' md:max-h-[80vh] md:mt-[30px]'>
                            <div className='flex gap-8'>
                                { show === "Won" ? 
                                    <div className='flex gap-4 items-center'>
                                         <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                                        <h1 className='font-semibold text-white p-[10px] bg-yellow-600 rounded-xl cursor-pointer' onClick={(e) => {setShow(e.target.innerHTML)}}>Won</h1>
                                    </div>
                                     :
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                                        <h1 className='font-semibold text-black p-[10px] rounded-xl cursor-pointer' onClick={(e) => {setShow(e.target.innerHTML)}}>Won</h1>
                                    </div>

                                    
                                }
                                { show === "Faild" ? 
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[20px]' src="../../icons/faild.svg" alt="" />
                                        <h1 className='font-semibold text-white p-[10px] bg-red-700 rounded-xl cursor-pointer' onClick={(e) => {setShow(e.target.innerHTML)}} >Faild</h1>
                                    </div> :
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[20px]' src="../../icons/faild.svg" alt="" />
                                        <h1 className='font-semibold text-black p-[10px] rounded-xl cursor-pointer' onClick={(e) => {setShow(e.target.innerHTML)}} >Faild</h1>
                                    </div>
                                }
                                
                            </div>
                            <div className='mt-[30px] mb-[150px] md:max-h-[60vh] overflow-auto'>
                                { show === "Won" && (
                                    <>
                                        { wonNames.map( (e, index) => (
                                            <div key={index} className='flex gap-2 m-[10px]'>
                                                <img className='w-[20px]' src="../../icons/trophy2.svg" alt="" />
                                                {e}
                                            </div>
                                        ))}

                                    </>
                                )}
                                { show === "Faild" && (
                                    <>
                                        { faildNames.map( (e, index) => (
                                            <div key={index} className='flex gap-2 m-[10px]'>
                                                <img className='w-[20px]' src="../../icons/faild.svg" alt="" />
                                                {e}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
            
            
        </div>
        
    )
}

export default View