import React from 'react'

export default function ImageModal({ img, setShowImage, }) {
    const onClose = () => {
        setShowImage( (prev) => !prev)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className=" p-4 rounded-lg shadow-lg z-10">
            <button onClick={onClose} className="mb-4 p-2 bg-white text-black rounded">
            Close
            </button>
            <img src={img} className='max-w-[80vw] max-h-[80vh] rounded-md' alt="" />
            
        </div>
        </div>
    )
}
