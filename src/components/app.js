'use strict';

import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';

import '../style/app.scss';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header title="Generate Cowsay Lorem" />
        <main>
          <p>I am a cow</p>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;