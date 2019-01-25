import React from 'react';

import Admin from './pages/admin/admin';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Admin />
      </div>
    );
  }
}
