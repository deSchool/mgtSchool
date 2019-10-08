import React, {Component} from 'react';
import {AppContainer} from './routes';
console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppContainer />;
  }
}
