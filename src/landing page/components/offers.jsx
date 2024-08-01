import React from 'react'

const Offers = () => {
    return (
        <div className='flex flex-row justify-center gap-[30px] items-center h-[25vh]'>
            <div className='flex'>
                <a href="">Icon</a>
                <div>
                    <h1 className='font-bold'>Join 10000+ students</h1>
                    <p>tutored on MyStudyAid.</p>
                </div>
            </div>
            <div className='flex'>
                <a href="">Icon</a>
                <div>
                    <h1 className='font-bold'>Pick from over 300</h1>
                    <p>amazing tutors across Africa.</p>
                </div>
            </div>
            <div className='flex'>
                <a href="">Icon</a>
                <div>
                    <h1 className='font-bold'>Save up to 60% on tutoring</h1>
                    <p>compared to agency businesses.</p>
                </div>
            </div>

        </div>
    )
}

export default Offers