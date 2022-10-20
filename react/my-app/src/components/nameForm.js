import React from 'react';
import { useState } from 'react';

const Selector = ({ items }) => {
    const isMultiple = items.filter(({selected}) => !!selected).length > 1;

    return <select multiple={isMultiple}>
        {
            items.map(({ value, text, selected }) => {
                return <option selected={!!selected} value={value} key={value}>{text}</option>;
            })
        }
    </select>
};

const NameForm = ({ name, text, tastes }) => {
    const [value, setValue] = useState({
        name,
        text,
        tastes
    });

    const changeName = (e) => setValue({
        ...value,
        name: e.target.value,
    });

    const changeText = (e) => setValue({
        ...value,
        text: e.target.value,
    });

    const handleSubmit = (e) => {
        console.log(`Submit: ${value.name}, ${value.text}`);
        e.preventDefault();
    };

    return <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={value.name} onChange={changeName} />
        </label>
        <label>
            Text:
            <textarea value={value.text} onChange={changeText} />
        </label>
        { tastes && <Selector items={tastes} /> }
        <input type="submit" value="Отправить" />
    </form>
};

export default NameForm;
