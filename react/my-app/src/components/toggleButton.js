import React from 'react';
import {useState} from 'react';
import Tick from './tick';

const ToggleButton = ({toggled}) => {
    const [toggle, setToggle] = useState(toggled);

    const handleClick = () => setToggle((prev) => !prev);

    return <button onClick={handleClick}>
        {toggle ? 'Toggled' : 'UnToggled'}
        {toggle && <Tick />}
    </button>
}

export default ToggleButton;
