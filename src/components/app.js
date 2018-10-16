'use strict';

import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import { say } from 'cowsay';

import '../style/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: `moo`,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    let message = say({
      text: `I'm a cow, MOOO!`,
    });

    this.setState({ message });
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Generate Cowsay Lorem" />
        <main>
          <button onClick={this.updateState}>Moo</button>
          <pre>{this.state.message}</pre>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;