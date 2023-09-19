import React, { useEffect, useState } from 'react'
import useCheckAdmin from '../../../hooks/useCheckAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAddPost from '../../../hooks/useAddPost';

function Add() {
    const { checkAdmin, isReady } = useCheckAdmin()
    const[formError, setFormError ] = useState(null)
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [ isUploading, setIsUploading ] = useState(null)
    const [caption, setCaption] = useState('')
    const [publicId, setPublicId] = useState('');

    const { error, isPending, add } = useAddPost()

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
  
const handleFileUpload = async (files) => {

        setIsUploading(true)

        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${process.env.REACT_APP_CLOUDNARY_NAME}`);
        formData.append('folder', `${process.env.REACT_APP_CLOUDNARY_NAME}`);
        
        try {
            
            const response = await fetch(`${process.env.REACT_APP_CLOUDNARY_URL}`,
                {
                    method: 'POST',
                    body: formData,
                }
        );

            if (response.ok) {
                const data = await response.json();
                setUploadedUrl(data.secure_url);
                setPublicId(data.public_id); // Save the public_id
                // console.log(data.secure_url)
                setIsUploading(null)

            } else {
                setFormError("Failed to upload file to Cloudinary")
                setIsUploading(null)
                console.error('Failed to upload file to Cloudinary');
        
        }} catch (error) {
            setFormError("Failed to upload file to Cloudinary")
            console.error('Error uploading file:', error, publicId);
            setIsUploading(null)

        }
    };
  const handleSubmit = async (e) => {
    e.preventDefault()
    add(caption, uploadedUrl)
  }

  return (
    <div>
      
      {/* Same as */}
      <ToastContainer />
      { isReady && (
        <form onSubmit={handleSubmit} className='min-h-screen  mb-[150px] mt-[20px] justify-center flex-wrap'>
            <div className="w-full max-w-lg mb-[30px] mx-auto">
                <div className="relative rounded-md shadow-sm">
                    <textarea
                    className="form-input block w-full sm:text-sm sm:leading-5 p-3 resize-none border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                    rows="3"
                    placeholder="Caption"
                    onChange={ (e) => { setCaption(e.target.value) }}
                    ></textarea>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                    </div>
                </div>
                </div>

          <div>
                <div className="flex items-center justify-center w-full">
                        <label  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hh:hover:bg-bray-800 hh:bg-gray-700 hover:bg-gray-100 hh:border-gray-600 hh:hover:border-gray-500 hh:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 hh:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 hh:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 hh:text-gray-400">Image ONLY</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileUpload(e.target.files)} />
                        </label>
                    </div> 
                    <center>
                {formError && <div className='error '> {formError} </div>}
                {!isUploading && (
                    <button className="rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300 mt-[20px]">{isPending && isPending ? "Adding..." : "Add Post"}</button>
                ) }
                {isUploading && (
                    <button disabled className="rounded-lg px-4 py-2 bg-blue-500 text-white  duration-300 mt-[20px]">Uplaoding image wait a momment</button>
                ) }
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