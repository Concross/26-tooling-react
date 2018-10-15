'use strict';

import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import Cowsay from './cowsay/cowsay';

import '../style/app.scss';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header title="Generate Cowsay Lorem" />
        <main>
          <Cowsay />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;