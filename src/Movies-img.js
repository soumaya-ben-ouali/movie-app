import React, { Component } from 'react';
import './Movie-cards.css';
import ModalMovie from './modalMovie';
import image1 from './gatsby.png' ; 
import image2 from './killbill.jpg' ; 
import image3 from './pulp-fiction.gif' ; 
import image4 from './django.jpg' ;
import image5 from './seewtnovember.jpg' ; 
import image6 from './thereader.jpg' ; 
import Film from './Movies-cards';
 



const cards =[
{
     rating:2,
     image: image1,
     name:"Gatsby",
    
},
{   rating:"*****",
    image: image2,
    name:"Kill Bill",
    
},
{   rating:"*****",
    image: image3,
    name:"Pulp Fiction",
   
},

 {   rating:"*****",
    image: image4,
    name:"Django",
   
},
{   rating:"*****",
     image: image5,
    name: "Seewt November",

},
{
    
    rating:"*****",
    image: image6,
    name:"The Reader",
}






]


class Moviesimg extends React.Component{
    constructor(props){
        super(props)

        this.state={
            movies : cards,
            image : '',
            name:'',
            rating:''
        }
    }
    newMovie= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addMovie = () => {
        this.setState({
            movies : this.state.movies.concat({rating:this.state.rating,image:this.state.image,name:this.state.name})
        })
    }
render(){
    return (
        <div className='container'> 
        

  

            {this.state.movies.map (el=><Film rating={el.rating}
             image={el.image} 
             name={el.name}  />)}
        <ModalMovie newValues={this.newMovie} addMovie={this.addMovie}/>
             
    </div>
        
       
    )
}
}


export default Moviesimg ;