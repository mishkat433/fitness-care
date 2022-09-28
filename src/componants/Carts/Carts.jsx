import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
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
        <div className='my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                spinner && <img src={spin} alt="" />
            }
            {
                carts.map(cart => <SingleCart cart={cart} key={cart.id} />)
            }
        </div>
    );
};

export default Carts;