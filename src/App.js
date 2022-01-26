import React from 'react';
import ToDo from './components/todolist'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

const year = new Date().getFullYear();

function App() {
  return(
    <>
      <BrowserRouter>
       <Switch>
         <Route exact path="/Google_Keep_Clone-React_Redux" component={ToDo} />
         <Redirect to="/Google_Keep_Clone-React_Redux" />
       </Switch>
      </BrowserRouter>
      <div className='footer'>
      <p id='foot'>&copy; {year}, &nbsp;&nbsp;&nbsp; Made by - Sahil Sachin Donde &nbsp;😀</p>
      </div>
    </>
  );
}

export default App;
