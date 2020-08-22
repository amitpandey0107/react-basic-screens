import React, { Suspense, Component } from 'react';
import history from './App/history';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './App/AppRoutes/Routes';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authState: 'loading' };
  }
  render() {
    const childProps = true;
    return (
      <React.Fragment>
        <Router history={history}>
          <Suspense fallback={<div className="loading"></div>}>
            <Routes childProps={childProps} />
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;