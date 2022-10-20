import React, { useState, useEffect } from 'react';

export const ItemsList = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        const newItems = getItems();
        setItems(newItems);
    }, [getItems]);

    return (
        <ul>
            { items.map((item) => <li key={item}>{item}</li>) }
        </ul>
    )
};
