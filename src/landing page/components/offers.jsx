import React from 'react'

const Offers = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-[30px] items-center mt-[40px]'>
            <div className='flex items-center'>
                <a href="" className='mr-2'>Icon</a>
                <div>
                    <h1 className='font-bold text-center sm:text-left'>Join 10000+ students</h1>
                    <p className='text-center sm:text-left'>tutored on MyStudyAid.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <a href="" className='mr-2'>Icon</a>
                <div>
                    <h1 className='font-bold text-center sm:text-left'>Pick from over 300</h1>
                    <p className='text-center sm:text-left'>amazing tutors across Africa.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <a href="" className='mr-2'>Icon</a>
                <div>
                    <h1 className='font-bold text-center sm:text-left'>Save up to 60% on tutoring</h1>
                    <p className='text-center sm:text-left'>compared to agency businesses.</p>
                </div>
            </div>
        </div>
    )
}

export default Offers
