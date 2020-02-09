import React from 'react';

const Footer = () => (
  <footer className="pv5 ph3 ph5-m ph6-l black bg-washed-red">
    <small className="f5 db tc">©2020 <b className="ttu">Guess The Baby Inc</b>., All Rights Reserved</small>
    <div className="tc mt3">
      <a href="/faqs/" title="Faqs" className="f5 dib ph3 link black dim">FAQs</a>
      <a href="/contact/" title="Contact" className="f5 dib ph3 link black dim">Contact Us</a>
      <a href="/terms/" title="Privacy" className="f5 dib ph3 link black dim">Terms Of Use</a>
    </div>
  </footer>
);

export default Footer;