import React from 'react';
import Carts from '../Carts/Carts';
import Header from '../Header/Header';
import avatar from '../../images/Mishkat pp size.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
    return (
        <div className='flex w-11/12 mx-auto gap-4'>
            <div className='w-4/5 my-14'>
                <Header />
                <h4 className='mt-8 text-2xl font-semibold'>Select Today's Exercise</h4>
                <Carts />
            </div>

            <div className='w-1/5 bg-gray-200'>
                <div className=" m-4 flex gap-3 items-center">
                    <img className='w-14 h-14 rounded-full' src={avatar} alt="" />
                    <div>
                        <h4 className='text-lg font-semibold'>Mishkat</h4>
                        <p className='text-gray-500'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Cox's Bazar</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;