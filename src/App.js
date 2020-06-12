import React from 'react';
import Login from './login/login';
import './App.css'
import Axios from 'axios'

function App() {
  // Axios('http://localhost:5000').then((res)=> console.log(res.data))
 

  return (
    <div className="App">
       <Login/>
    </div>
  );
}

export default App;
