import React from 'react';

const SignUp = () => (
  <div className="fl w-100 w-50-ns bg-light-gray tc pt6 pa4">
    <form className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0 ttu">Sign Up</legend>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="first-name">First Name</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first-name"  id="first-name" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="last-name">Last Name</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last-name"  id="last-name" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address-signup" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="confirm-email">Confirm Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="confirm-email"  id="confirm-email" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password-signup" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="confirm-password">Confirm Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirm-password"  id="confirm-password" />
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
      </fieldset>
      <div className="submit">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" />
      </div>
    </form>
  </div>
);

export default SignUp;