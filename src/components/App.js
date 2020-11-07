import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Home from './Home';
import Header from './Header';
import SignUp from './SignUp';
import Account from './Account';
// import Footer from './Footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/account" component={Account} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;
