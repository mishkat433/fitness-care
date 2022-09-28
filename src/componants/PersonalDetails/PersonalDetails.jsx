import React from 'react';
import avatar from '../../images/Mishkat pp size.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const PersonalDetails = () => {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <img className='w-14 h-14 rounded-full' src={avatar} alt="" />
                <div>
                    <h4 className='text-lg font-semibold'>Mishkat</h4>
                    <p className='text-gray-500'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Cox's Bazar</p>
                </div>
            </div>
            <div className='bg-orange-100 mt-10 flex p-4 justify-between rounded-xl'>
                <div className=''>
                    <p><span className='text-3xl font-semibold'>68</span>kg</p>
                    <p>Weight</p>
                </div>
                <div className=''>
                    <p><span className='text-3xl font-semibold'>5.7</span>in</p>
                    <p>Height</p>
                </div>
                <div className=''>
                    <p><span className='text-3xl font-semibold'>19</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>

        </div>
    );
};

export default PersonalDetails;