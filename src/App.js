import React, { Component } from 'react';
import './Movie-cards.css';
import Moviesimg  from  './Movies-img';




class App extends Component {
  render() {
    return (
      <div className="movies__cards">
      
      

      <img className="logo" src="/logo.png"/>
      
      <div className="navbar">
    
  <form className="form_inline"/>
    <input className="form__control"  type="search" 
    placeholder="Search"/>
    <button className="btn"> search </button>
</div>
          <Moviesimg/>  

      </div>
    );
  }
}

export default App;
