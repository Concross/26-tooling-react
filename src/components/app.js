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
      content: `moo`,
      buttonText: `Moo?`,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    let content = say({
      text: Faker.fake('{{lorem.paragraph}}'),
    });

    let buttonText = `MOOO!`;

    this.setState({ content, buttonText });
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Generate Cowsay Lorem" />
        <main id="cowsay-container">
          <button onClick={this.updateState}>{this.state.buttonText}</button>
          <pre>{this.state.content}</pre>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;