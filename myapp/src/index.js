import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Navbar from './components/Navbar.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //JSX Fragment.
    <>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <App />
    </>
);


