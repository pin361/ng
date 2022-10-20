import React, { useState, useEffect, useRef } from "react";

function Ref() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevValue = useRef();

  useEffect(() => {
    renderCount.current += 1;
    console.log(inputRef.current.value)
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Render count {renderCount.current}</h1>
      <h1>Previous state {prevValue.current}</h1>
      <input ref={inputRef} onChange={ (e) => setValue(e.target.value) } value={value}></input>
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
    </div>
  );
}

export default Ref;
