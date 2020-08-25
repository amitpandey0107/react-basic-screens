import React, { Suspense, Component } from 'react';
import history from './App/history';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './App/AppRoutes/PublicRoutes';
import { Provider } from 'react-redux';
import store from './App/Store/Store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authState: 'loading' };
  }
  render() {
    const childProps = true;
    return (
      <Provider store={store}>
      {/* <React.Fragment> */}
        <Router history={history}>
          <Suspense fallback={<div className="loading"></div>}>
            <Routes childProps={childProps} />
          </Suspense>
        </Router>
      {/* </React.Fragment> */}
      </Provider>
    );
  }
}

export default App;