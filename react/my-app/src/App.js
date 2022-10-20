import { useState } from 'react';
import './App.css';

const App = ({ text }) => {
  const [setText] = useState(text);
  const onChangeText = (text) => {
    setText(text);
  }

  return (
    <div className="App">
        <span>{text}</span>
        <br/>
        <input value={text} onChange={(value, arg0, arg1) => onChangeText(value)} />
    </div>
  );
}

export default App;
