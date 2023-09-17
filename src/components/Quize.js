import React, { useState } from 'react'
import useUpdateQuiz from '../hooks/useUpdateQuiz'
function Quize({ q, answers, correct, docId, won, faild}) {
    const [ selected, setSelected ] = useState(null)
    const win = new Audio("../audio/win.mp3")
    const fail = new Audio("../audio/fail.mp3")
    const { setDataFunc } = useUpdateQuiz()
    // console.log(won)
    const handleClick = (ans) => {
        if(ans === correct){
            win.play()
            setTimeout(() => {
                window.location.reload(); // Reload the page
            }, 2000);
        }else{
            fail.play()
            setTimeout(() => {
                window.location.reload(); // Reload the page
            }, 1000);
        }
        setDataFunc(correct, ans, docId)
        setSelected(ans)
    }
    
    return (
            <div className='m-[10px] rounded-lg p-[20px] cursor-pointer '>
                <div className=''>
                    <div className='w-[30px]'>
                        <img src="./icons/q.svg" alt="" />
                    </div>
                </div> 
                <div className='mt-[10px]'>
                    <h1 className='font-semibold text-lg m-[10px]'>{q}</h1>
                </div>
                <div>
                    <p className=' m-[10px]'>Answers - 48</p>
                </div> 
                <div>
                    { !won && !faild && !selected && (
                        <>
                        {
                            answers.map((e, index) => (
                                <div className='answer-default' key={e} onClick={ (e) => { handleClick(index + 1)}}>
                                    <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                </div>
                            ))
                        }
                        </>
                    )}

                    { !won && !faild &&  selected && (
                        <>
                        {
                            answers.map((e, index) => (
                                <div key={e}>
                                    {
                                        index + 1  === correct ? 
                                        <div key={e} className='answer-correct'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div> : selected === correct ? 
                                        <div key={e} className='answer-default'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div> :
                                        <div key={e} className='answer-wrong'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div>
                                        
                                    }
                                </div>
                                
                            ))
                        }
                        </>
                    )}

                { won && !faild && (
                    <>
                        {answers.map((e, index) => (
                                <div key={e}>
                                    {
                                        index + 1  === correct ? 
                                        <div key={e} className='answer-correct'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div> :
                                        <div key={e} className='answer-default'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div>
                                        
                                    }
                                </div>
                                
                            ))}
                    </>
                ) }

                { faild && !won && (
                    <>
                        {answers.map((e, index) => (
                                <div key={e}>
                                    {
                                        index + 1  === correct ? 
                                        <div key={e} className='answer-correct'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div> :
                                        <div key={e} className='answer-wrong'>
                                            <p key={e} ><span className='mr-[10px]'>{index + 1}.</span>{e}</p>
                                        </div>
                                        
                                    }
                                </div >
                                
                            ))}
                    </>
                ) }
                    
                    
                </div>    
            </div>
        )
}

export default Quize