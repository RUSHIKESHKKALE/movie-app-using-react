import React from "react";

function Moveicard(props){
  
  
    //object destructuring
    console.log(props);

    const {movies,addStars,subtractStar,toggleFav,toggleAtd}=props;
    
    const { title, plot, price, rating, star,fav,isInCart,poster } =props.movies;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src={poster}
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">rs.{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  onClick={()=>{subtractStar(movies)}}
                />

                <img
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />

                <img
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                  onClick={()=>{addStars(movies)}}
                />

                <span>{star}</span>
              </div>
              {fav? <button className="unfavourite-btn" onClick={()=>{toggleFav(movies)}}>Un-Favourite</button>:<button className="favourite-btn" onClick={()=>{toggleFav(movies)}}>Favourite</button>}
             
              {isInCart? <button className="unfavourite-btn" onClick={()=>{toggleAtd(movies)}}>Remove cart</button>:<button className="cart-btn" onClick={()=>{toggleAtd(movies)}}>Add to card</button>}
              
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Moveicard;
