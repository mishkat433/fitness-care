import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ time, setTime }) => {
    const [breaktime, setBreaktime] = useState(0);

    const breakHandle = (breakTime) => {
        localStorage.setItem("break-time", breakTime);

        const getStorageData = localStorage.getItem("break-time");
        if (getStorageData) {
            setBreaktime(getStorageData);
        } else {
            setBreaktime(breakTime);
        }
    }

    const toastify = () => {
        toast("Your activity successfully completed");

        localStorage.setItem("break-time", 0);
        setBreaktime(0);

        setTime(0);
    }

    const breakTimeArray = [10, 20, 30, 40, 50];

    return (
        <div className='mt-8'>
            <h1 className='text-xl lg:text-2xl font-semibold'>Add A Break</h1>
            <div className='bg-orange-100 text-white mt-5 flex p-4 justify-between items-center rounded-xl text-xl'>

                {
                    breakTimeArray.map(second => <p key={second} className='bg-orange-700 rounded-2xl p-2 w-14 h-14 items-center flex justify-center hover:bg-orange-900 cursor-pointer' onClick={() => breakHandle(second)}><span>{second}</span>s</p>)
                }

            </div>

            <h1 className='text-xl lg:text-2xl font-semibold mt-8'>Exercise Details</h1>
            <div className='bg-orange-100 flex justify-between items-center p-4 text-md lg:text-xl rounded-xl my-6' >
                <h5 > Exercise Time: </h5 >
                <h5>{time} seconds</h5>
            </div>
            <div className='bg-orange-100 flex justify-between items-center p-4 text-md lg:text-xl rounded-xl '>
                <h5>Break Time : </h5>
                <h5>{breaktime ? breaktime : localStorage.getItem("break-time")} seconds</h5>
            </div>
            <button className="btn btn-active bg-orange-700 mt-10 w-full text-md lg:text-lg" onClick={toastify}>Activity Completed</button>
            <ToastContainer />
        </div >
    );
};

export default Sidebar;