import React, { useEffect } from 'react';
import {useState} from 'react';

const Tick = () => {
    const [clock, setTick] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTick(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    });

    return <div>

        <h1>Привет, мир!</h1>
        <h2>Сейчас {clock.toLocaleTimeString()}.</h2>
    </div>
}

export default Tick;
