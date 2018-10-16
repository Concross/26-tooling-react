'use strict';

import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import { say } from 'cowsay';
import Faker from 'faker';

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
      text: Faker.fake('{{lorem.paragraph}}'),
    });

    this.setState({ message });
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Generate Cowsay Lorem" />
        <main id="cowsay-container">
          <button onClick={this.updateState}>Moo?</button>
          <pre>{this.state.message}</pre>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;