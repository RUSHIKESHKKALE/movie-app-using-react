import React from 'react';
import Moveicard from './Moveicard';

function Movielist (props){
    
 
     //const {title,plot,price,rating,stars,fav,cart}=this.state;
     const {movies,addStars,subtractStar,toggleFav,toggleAtd}=props;

     console.log(props);
        return (
            <>
            {movies.map((movie)=> (<Moveicard movies={movie} 
            addStars={addStars} 
            subtractStar={subtractStar} 
            toggleFav={toggleFav} 
            toggleAtd={toggleAtd} 
            key={movie.id}/>))}
            </>
     )
    
}

export default Movielist;