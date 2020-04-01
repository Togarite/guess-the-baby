import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignUpSignIn = (props) => {
  return (
    <article className="cf">
      <SignIn />
      <SignUp />
    </article>
  )
};

export default SignUpSignIn;