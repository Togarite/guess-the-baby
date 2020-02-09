import React from 'react';

const About = () => (
  <article className="cf pa3 mw9 center ma2 tc">
    <header className="fl w-100 pa2-m pa3-l mb2 mb2-l">
      <h2 className="lh-title f3 b ma0 ttu">
        How It Works
      </h2>
    </header>
    <section className="fl w-100">
      <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
        <p className="f6 lh-copy measure">
          create an account...
        </p>
      </div>
      <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
        <p className="f6 lh-copy measure">
          create pool: <br/>
          date, time, height, weight, sex, first letter... <br/>
          ... stripe, prize breakup,
        </p>
      </div>
      <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
        <p className="f6 lh-copy measure">
          invite friends to participate via email, facebook... 
        </p>
      </div>
      <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
        <p className="f6 lh-copy measure">
          submit information once baby is born to delegate prizes...
        </p>
      </div>
    </section>
  </article>
);

export default About;