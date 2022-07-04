import './App.css';
import React, { Component } from 'react';
import Blogs from './blogs';
import Clients from './clients';
import Navbar from './NavBar/navbar';

class App extends Component {
  render() { 
    return (
      <div>
        <Navbar/>
        <main className='container'> 
          <Blogs/>     
          <Clients />
        </main>      
      </div>
    );
  }
}

export default App;
