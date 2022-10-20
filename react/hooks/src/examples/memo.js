import React, { useState, useMemo, useEffect } from "react";

const complexCompute = (num) => {
    console.log('complexCompute');

    let i = 0;

    while (i < 1000000000) ++i;

    return num * 2;
};

function Memo() {
    // const [renderCount, setRenderCount] = useState(1);
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'red' : 'green'
    }), [colored]);

    const computed = useMemo(
        () => complexCompute(number),
        [number]
    );

    useEffect(() => {
        console.log('styles changed');
    }, [styles]);

    return (
        <div>
            <h1 style={styles}>Calculated field: {computed}</h1>
            <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setNumber((prev) => prev - 1)}>Decrement</button>
            <button onClick={() => setColored((prev) => !prev)}>Colored</button>
        </div>
    );
}

export default Memo;
