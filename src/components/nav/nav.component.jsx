import React from 'react';

import './nav.styles.css';

const Nav = () => (
<nav className="flex justify-between zDex bb b--black-8 bg-light-green fixed w-100 ph3 pv1 pt2-ns ph4-m ph5-l">
  <a className="link black-70 hover-black no-underline flex items-center pa3" href="/">
    LOGO
    {/* <svg
      className="dib h1 w1"
      data-icon="grid"
      viewBox="0 0 32 32"
      style={{fill: "currentColor"}}>
      <title>Super Normal Icon Mark</title>
      <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
      </path>
    </svg> */}
  </a>
  <div className="flex-grow pa3 flex items-center">
    <a className="f5 f4-ns link dib black dim mr3 mr4-ns" href="#0">FAQs</a>
    <a className="f5 f4-ns dib black bg-animate hover-bg-black hover-light-green no-underline pv2 ph4 br-pill ba b--black-80" href="#0">Sign In</a>
  </div>
</nav>

);

export default Nav;