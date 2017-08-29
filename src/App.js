import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './pages/Dashboard';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      injectTapEventPlugin();
  };
  render() {
    return (
      <MuiThemeProvider>
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
