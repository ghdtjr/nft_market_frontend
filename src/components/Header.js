import React  from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


function Header() {
  return (
    <div className='nav'>
      <nav className='nav_bar'>
        <Link style={{
          fontSize:"33px",
          textDecorationLine: 'none',
          color:'black',}} to="/">Logo</Link>
        <input placeholder='Search items, collections, and accounts' className ="search_box"></input>
        <Link style={{textDecorationLine: 'none', color:'black'}} to="/">Explore</Link>
        <Link style={{textDecorationLine: 'none', color:'black'}} to="/create">Create</Link>
        <Link style={{textDecorationLine: 'none', color:'black'}} to="/mypage">MyPage</Link>
      </nav>
    </div>
  )
}

export default Header;
