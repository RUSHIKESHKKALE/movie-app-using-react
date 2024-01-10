import React from "react";
import Movielist from "./MovieList";
import Navbar from "./navbar";
import { moviedData as movies } from "./moviesdata";

//import Student from "./props";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
    // this.addStar=this.addStar.bind(this);
  }

  //adding stars

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      movies: movies,
    });
  };

  //decreasing stars
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  //handle favourite button
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };

  //handle add to cart button event
  handleToggleAtc = (movie) => {
    let { movies,cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    //hndling cartCount
    if(movies[mid].isInCart){
      cartCount=cartCount+1;
    }else{
      cartCount-=1;
    }

    this.setState({
      movies: movies,
      cartCount:cartCount
    });
    console.log(cartCount);
  };

  render() {
    const {movies,cartCount}=this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <Movielist movies={movies}
        addStars={this.handleIncStars}
        subtractStar={this.handleDecStar}
        toggleFav={this.handleToggleFav}
        toggleAtd={this.handleToggleAtc}/>
        {/* <Student name="rushi"/>
    <Student/> */}
      </>
    );
  }
}

export default App;
