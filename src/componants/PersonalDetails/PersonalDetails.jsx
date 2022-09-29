import React from 'react';
import avatar from '../../images/Mishkat pp size.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSwimmer, faHiking, faDisplay } from '@fortawesome/free-solid-svg-icons';

const PersonalDetails = () => {

    return (
        <div>
            <div className="flex gap-3 items-center">
                <img className='w-16 h-16 rounded-full' src={avatar} alt="" />
                <div>
                    <h4 className='text-md lg:text-lg font-semibold'>Mishkat</h4>
                    <p className='text-gray-500'>Web-developer</p>
                    <p className='text-gray-500'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Cox's Bazar</p>
                </div>
            </div>
            <h4 className='text-xl lg:text-2xl mt-2 font-semibold'>Hobbies</h4>
            <div className='bg-orange-100 mt-1 flex p-2 lg:p-4 justify-between rounded-xl'>
                <div className=''>
                    <p className='text-5xl text-center text-orange-700'><FontAwesomeIcon icon={faSwimmer}></FontAwesomeIcon></p>
                    <p>Swimming</p>
                </div>
                <div className=''>
                    <p className='text-5xl text-center text-orange-700'><FontAwesomeIcon icon={faHiking}></FontAwesomeIcon></p>
                    <p>Hiking</p>
                </div>
                <div className=''>
                    <p className='text-5xl text-center text-orange-700'><FontAwesomeIcon icon={faDisplay}></FontAwesomeIcon></p>
                    <p>Codding</p>
                </div>
            </div>

        </div>
    );
};

export default PersonalDetails;