import React  from 'react';
import { Link } from 'react-router-dom';
import './navigation_bar.scss';


function NavigationBar() {
  return (
    <div>
        <Link to="/">logo</Link>
        <input className ="search_box"></input>
        <Link to="/">Explore</Link>
        <Link to="/create">Create</Link>
        <Link to="/mypage">MyPage</Link>
        <hr></hr>
    </div>
  )

}

export default NavigationBar;
