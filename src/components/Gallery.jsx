import React from 'react'

export const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        
        <h2 className='text-center text-[#5c5c58] p-4'>
            Gallery
            <div className='grid sm:grid-cols- gap-1'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                </div>
                <div>
                    <img  className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1644329685726-22a3af3f705c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1496438296155-bd1e7ece2b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                </div>
                <div>
                    <img  className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1583875074734-b6fd484ddc67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80" alt="/" />
                </div>
                <div>
                    <img  className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="/" />
                </div>
                <div>
                    <img  className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1450150713862-56d28b961558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="/" />
                </div>
                
                <div >
                    <img className='' src="https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                </div>
            </div>
        </h2>
    </div>
  )
}
export default Gallery