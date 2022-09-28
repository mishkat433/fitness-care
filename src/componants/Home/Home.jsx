import React from 'react';
import Carts from '../Carts/Carts';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div className='flex w-11/12 mx-auto gap-4'>
            <div className='w-4/5 my-14'>
                <Header />

                <h4 className='mt-8 text-2xl font-semibold'>Select Today's Exercise</h4>

                <Carts />
            </div>
            <div className='w-1/5 bg-gray-200'>

            </div>
        </div>
    );
};

export default Home;