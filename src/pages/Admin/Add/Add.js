import React, { useEffect, useState } from 'react'
import useCheckAdmin from '../../../hooks/useCheckAdmin'
import useAddQuiz from '../../../hooks/useAddQuiz'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
  const { checkAdmin, isReady } = useCheckAdmin()
  const { isPending, error, add } = useAddQuiz()
  const [ a1, setA1 ] = useState('')
  const [ a2, setA2 ] = useState('')
  const [ a3, setA3 ] = useState('')
  const [ a4, setA4 ] = useState('')
  const [ q, setQ ] = useState('')
  const [ correct, setCorrect ] = useState('')

  const notify = () => {
    toast('🦄 Quiz is added!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };


  useEffect(() => {
    checkAdmin()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    add(a1, a2, a3, a4, q, correct)
  }

  return (
    <div>
      
      {/* Same as */}
      <ToastContainer />
      { isReady && (
        <form onSubmit={handleSubmit} className='min-h-screen flex items- mb-[150px] mt-[20px] justify-center flex-wrap'>
          <div>
            <h1 className='font-semibold text-3xl  text-center text-purple-950'>Add Quiz</h1>
            {error && <p className='error'>{error}</p>}
            
            <p className='text-left mt-[20px]'>Question ?</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setQ(e.target.value)}
              />
              <p className='text-left mt-[20px]'>Answer 1</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setA1(e.target.value)}

              />
              <p className='text-left mt-[20px]'>Answer 2</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setA2(e.target.value)}
              />
              <p className='text-left mt-[20px]'>Answer 3</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setA3(e.target.value)}
              />
              <p className='text-left mt-[20px]'>Answer 4</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setA4(e.target.value)}
              />
              <p className='text-left mt-[20px]'>Correct Answer</p>
            <input 
              type="text" 
              className='login-input'
              onChange={(e) => setCorrect(e.target.value)}
              />
              <center>
                        {isPending ? <button disabled>Loading</button> : <button onClick={notify}>Add Quiz</button>} 
              </center>
          </div>
        </form>
      )}
      {
        !isReady && (
          <p><img src="../icons/loading.gif" className='w-[150px]'  alt="" /></p>
        )
      }
    </div>
  )
}

export default Add