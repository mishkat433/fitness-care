import React, { useState } from 'react';
import Carts from '../Carts/Carts';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Question from '../Question/Question';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [time, setTime] = useState(0);
    const handleTime = (selectTime) => {
        setTime(selectTime + time);
    }

    return (
        <div className='w-11/12 mx-auto '>
            <div className='flex flex-col-reverse lg:flex-row  gap-3'>
                <div className='lg:w-3/4'>
                    <h4 className='mt-8 text-2xl font-semibold'>Select Today's Exercise</h4>
                    <Carts handleTime={handleTime} />
                    <Question />
                </div>

                <div className='lg:w-1/4 bg-orange-200  p-3 lg:fixed lg:top-0 lg:right-0 h-full lg:h-[100vh] mt-8 lg:mt-0 rounded-xl lg:rounded-none'>
                    <PersonalDetails />
                    <Sidebar time={time} setTime={setTime} />
                </div>
            </div>
        </div>
    );
};

export default Home;