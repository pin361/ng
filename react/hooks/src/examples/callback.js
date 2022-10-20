import React, { useState, useMemo, useCallback } from "react";
import { ItemsList } from "./examples/itemsList";

function App() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(10);

    const styles = useMemo(() => ({
        color: colored ? 'red' : 'green'
    }), [colored]);

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count)
            .fill('')
            .map((_, index) => `Item ${index + 1}`);
    }, [count]);

    return (
        <div>
            <h1 style={styles}>Items amount: {count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setColored((prev) => !prev)}>Colored</button>

            <ItemsList getItems={generateItemsFromAPI} />
        </div>
    );
}

export default App;
