// Dependencies
// ------------

// Libraries
import React from 'react';
// Styles
import './App.css';
// Components
import SiteHeader from './SiteHeader';

// Internal
// --------

const App = () => {
  return (
    <>
      <SiteHeader />

      <main role="main" className="app">
        <p>This is the App.</p>
      </main>
    </>
  );
}

// Exports
// -------

export default App;
