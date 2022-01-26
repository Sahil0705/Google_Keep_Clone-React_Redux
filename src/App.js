import React from 'react';
import ToDo from './components/todolist'

const year = new Date().getFullYear();

function App() {
  return(
    <>
      <ToDo />
      <div className='footer'>
      <p id='foot'>&copy; Copyright {year}, &nbsp;&nbsp;&nbsp; Made by - Sahil Sachin Donde😀</p>
      </div>
    </>
  );
}

export default App;
