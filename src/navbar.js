
//import styled from 'styled-components';

import navStyles from './navbar.module.css';

function Navbar (props) {
  
    console.log(props);
    const {cartCount}=props;
    return (
      <>
        <div className={navStyles.nav}>
          <div className={navStyles.title}>Movie-App</div>

          <div className={navStyles.cartContainer}>
            <img className={navStyles.cartIcon} alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png" />
            <span className={navStyles.cartCount}  >{cartCount}</span>
          </div>
        </div>
      </>
    );
  }


export default Navbar;

