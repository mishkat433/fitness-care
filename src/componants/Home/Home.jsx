import React from 'react';
import Carts from '../Carts/Carts';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Sidebar from '../Sidebar/Sidebar';





const Home = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className='flex flex-col-reverse lg:flex-row  gap-3'>
                <div className='lg:w-3/4'>
                    <h4 className='mt-8 text-2xl font-semibold'>Select Today's Exercise</h4>
                    <Carts />
                </div>

                <div className='lg:w-1/4 bg-orange-200  p-3 fixed top-0 right-0 h-full'>
                    <PersonalDetails />
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;