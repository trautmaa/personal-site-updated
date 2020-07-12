import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import FancyDiv from 'components/FancyDiv';
import Dynamic from 'containers/Dynamic';
import './app.css';
import './styles/main.scss';

function App() {
  return (
    <Root>
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
