import React from 'react'

const CourseChapterNav = ({title, duration, isWatched}) => {
    title = !title ? 'Section 1: Course Introduction' : title
    duration = !duration ? '1:50' : duration


  return (
    <React.Fragment>
        <button className={`w-full font-normal px-5 py-2 border border-transparent hover:border hover:border-blue-600 ${isWatched && 'bg-gray-300'}`}>
            <div className='flex justify-between items-start border border-red-600'>
                <div className=''>
                    <h1 className='font-semibold'>{title}</h1>
                    <p className='font-thin text-left text-sm'>1h 34m</p>
                </div>
                
                <div className='text-right'>
                    <button>{'v'}</button>
                </div>
            </div>
            
        </button>
        {/* <svg 
            className=' fill-black '
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 25" >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m9 17 8-5-8-5z"></path>
        </svg> */}
    </React.Fragment>
  )
}

export default CourseChapterNav