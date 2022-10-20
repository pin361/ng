import React from 'react';

const UncontroledForm = ({ name, text, tastes }) => {
    const input = React.createRef();
    const fileInput = React.createRef();

    const handleSubmit = (e) => {
        console.log(`Submit: ${input.current.value}, selected files: ${fileInput.current.files[0].name}`);
        e.preventDefault();
    };

    return <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" ref={input} />
        </label>
        <label>
            Upload File:
            <input type="file" ref={fileInput} />
        </label>
        <input type="submit" value="Отправить" />
    </form>
};

export default UncontroledForm;
