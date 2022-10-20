import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './components/toggleButton';
import NameForm from './components/nameForm';
import UncontrolledForm from './components/uncontrolledForm';

const tastes = [
    { value: 1, text: 'orange', selected: false },
    { value: 2, text: 'apple', selected: true },
    { value: 3, text: 'peach', selected: true },
];

ReactDOM.render(
  <React.StrictMode>
    {/* <App text='Hello World!' /> */}
    {/* <ToggleButton toggled={true} /> */}
    <h1>Named form</h1>
    <NameForm name="John" text="Some text" tastes={tastes} />
    <h1>Uncontrolled form</h1>
    <UncontrolledForm />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
