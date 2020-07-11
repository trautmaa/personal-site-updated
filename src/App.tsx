import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from '@reach/router';
import FancyDiv from 'components/FancyDiv';
import Dynamic from 'containers/Dynamic';
import './app.css';
import './styles/main.scss';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  console.log('App -> window.location.pathname', window.location.pathname);
  return (
    <Root>
      {/* <nav> */}
        {/* <Link className='home' to='/'> */}
          {/* Alex Trautman */}
        {/* </Link> */}
        {/* <Link to='/blog'>Blog</Link> */}
        {/* <Link to='/dynamic'>Dynamic</Link> */}
      {/* </nav> */}
      <div className='content'>
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path='dynamic' />
              <Routes path='*' />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  );
}

export default App;
