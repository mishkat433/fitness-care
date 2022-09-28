import React, { useState } from 'react';

const Sidebar = ({ time }) => {
    const [breaktime, setBreaktime] = useState(0);
    return (
        <div className='mt-8'>
            <h1 className='text-xl lg:text-2xl font-semibold'>Add A Break</h1>
            <div className='bg-orange-100 text-white mt-5 flex p-4 justify-between items-center rounded-xl text-xl'>
                <p className='bg-orange-700 rounded-full p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => setBreaktime(10)}><span>10</span>s</p>
                <p className='bg-orange-700 rounded-full p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => setBreaktime(20)}><span>20</span>s</p>
                <p className='bg-orange-700 rounded-full p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => setBreaktime(30)}><span>30</span>s</p>
                <p className='bg-orange-700 rounded-full p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => setBreaktime(40)}><span>40</span>s</p>
                <p className='bg-orange-700 rounded-full p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => setBreaktime(50)}><span>50</span>s</p>
            </div>
            <h1 className='text-xl lg:text-2xl font-semibold mt-8'>Exercise Details</h1>
            <div className='bg-orange-100 flex justify-between items-center p-4 text-md lg:text-xl rounded-xl my-6' >
                <h5 > Exercise Time: </h5 >
                <h5>{time} seconds</h5>
            </div >
            <div className='bg-orange-100 flex justify-between items-center p-4 text-md lg:text-xl rounded-xl '>
                <h5>Break Time : </h5>
                <h5>{breaktime} seconds</h5>
            </div>
            <button className="btn btn-active bg-orange-700 mt-10 w-full text-md lg:text-lg">Activity Completed</button>
        </div >
    );
};

export default Sidebar;