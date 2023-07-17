//1) import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App';

// 2) Get a reference to the div with ID root (index.html ./public line 33)
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<MyApp />);