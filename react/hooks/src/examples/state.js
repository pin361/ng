import React, { useState } from "react";

const computeInitial = () => {
    console.log('computeInitial');
    return Math.trunc(Math.random() * 100);
}

export function State() {

  const [counter, setCounter] = useState(() => computeInitial());

  const [state, setState] = useState({
      title: 'Счетчик',
      date: Date.now()
  })

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const updateTitle = () => {
    setState((prev) => ({ ...prev, title: 'New title' }));
  };

  return (
    <div>
      <h1>{state.title} {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добавить</button>
      <button onClick={decrement} className="btn btn-success">Удалить</button>

      <button onClick={updateTitle} className="btn btn-default">Изменить</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
