import React, { Component } from 'react';

const Film=(props)=>{
    return(
        
        <div className='movies__cards'>
        <span className='starts'>{props.rating}</span>
         <img className='image'src={props.image}></img>
         <p className= 'name'> {props.name} </p>
        </div>
        
    )
}

export default Film;