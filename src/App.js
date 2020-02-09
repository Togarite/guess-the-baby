import React from 'react';

import Nav from './components/nav/nav.component';
import Homepage from './pages/homepage/homepage.component';
import SignUpSignIn from './pages/signup-signin/signup-signin.component';
import Footer from './components/footer/footer.component';
// import logo from './logo.svg';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Homepage />
        <SignUpSignIn />
        <Footer />
      </>
    )
  }
}

export default App;
