import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Nav from './components/nav/nav.component';
import Homepage from './pages/homepage/homepage.component';
import Faqs from './pages/faqs/faqs.component';
import SignUpSignIn from './pages/signup-signin/signup-signin.component';
import Footer from './components/footer/footer.component';

import './App.css';

class App extends React.Component {
  
  state = {
    currentUser: null
  };

  // proprety that changes when onAuthStateChanged (ie: when user signs in/out or component unmounts)...
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <>
        <Nav currentUser={this.state.currentUser} />  
        <Switch>        
          <Route exact path="/" component={Homepage} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/signin" component={SignUpSignIn} />
        </Switch>     
        <Footer />
      </>
    )
  }
};

export default App;
