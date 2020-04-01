import React from 'react';

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="fl w-100 w-50-ns bg-light-gray tc pt6 pa4">
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 ttu">Sign In</legend>
            <div className="mt3">
              <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email"  
              id="email-signin" 
              value={this.state.email} 
              onChange={this.handleChange}
              required/>
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            </div>
            <div className="mv3">
              <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password-signin" 
              value={this.state.password} 
              onChange={this.handleChange} 
              required/>
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
          </fieldset>
          <div className="submit">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hiding" 
            type="submit" 
            value="Sign In" />
          </div>
          <div className="submit">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hiding" 
            type="submit" 
            value="Sign In With Google" 
            onClick={signInWithGoogle} 
            target="_self" />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign up</a>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </form>
      </div>
    );
  };
};

export default SignIn;