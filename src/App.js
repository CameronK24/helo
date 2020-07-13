import React from 'react';
import './reset.css';
import './App.css';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Nav/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
