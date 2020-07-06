import React from 'react';
import { Link } from '@reach/router';
import Links from 'components/Links';

export default () => (
  <div className='landing'>
    <h1>Alex Trautman</h1>
    <p>Web developer, athlete, good listener</p>
    <Links />
    <Link to='/profile'>
      <button>Enter site</button>
    </Link>
  </div>
);
