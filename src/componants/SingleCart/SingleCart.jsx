import React from 'react';

const SingleCart = (props) => {
    const { cart, handleTime } = props
    const { name, image, details, age, time } = cart
    return (
        <div data-aos="zoom-out-up">
            <div className="card  bg-orange-200 p-2 h-full">
                <figure><img className='w-full h-[250px] lg:h-[300px] rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="mt-4 px-2">
                    <h2 className="text-2xl text-orange-800 font-bold mb-2">{name}</h2>
                    <p className='text-gray-600'>{details.slice(0, 80)}... </p>
                    <p className='font-bold my-2'>For-age : {age} </p>
                    <p className='font-bold'>Time-required : {time}s </p>
                    <button className="btn  bg-orange-700 w-full mt-4" onClick={() => handleTime(time)}>Add to List</button>

                </div>
            </div>
        </div>
    );
};

export default SingleCart;