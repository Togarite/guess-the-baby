import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './nav.styles.css';

const Nav = ({ currentUser }) => {
  return (
    <nav className="flex justify-between zDex bb b--black-8 bg-light-green fixed w-100 ph3 pv1 pt2-ns ph4-m ph5-l">
      <Link 
      to="/"
      className="link black-70 hover-black no-underline flex items-center pa3" >
        LOGO
      </Link>
      <div className="flex-grow pa3 flex items-center">
        <Link 
        to="/faqs"
        className="f5 f4-ns link dib black dim mr3 mr4-ns" >
          FAQs
        </Link>
      {
        currentUser ?
        <button
        style={{cursor: "pointer"}}
        className="f5 f4-ns dib black bg-animate hover-bg-black hover-light-green no-underline pv2 ph4 br-pill ba b--black-80" 
        onClick={() => auth.signOut()} >
          Sign Out
        </button> 
        :
        <Link 
        to="/signin/"
        className="f5 f4-ns dib black bg-animate hover-bg-black hover-light-green no-underline pv2 ph4 br-pill ba b--black-80" >
          Sign In
        </Link>
      }
      </div>
    </nav>
  )
};

export default Nav;