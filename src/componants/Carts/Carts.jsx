import React, { useEffect, useState } from 'react';
import spin from "../../images/spinner.gif"

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        try {
            fetch("fitnessData.json")
                .then(res => res.json())
                .then(data => setCarts(data))
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setSpinner(false)
        }

    }, [])
    return (
        <div className='mt-7 grid grid-cols-3 gap-5'>
            {
                spinner && <img className='' src={spin} alt="" />
            }

        </div>
    );
};

export default Carts;