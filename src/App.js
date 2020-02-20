import React from 'react';
import './App.css';
import './reset.css'
import { Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
// import Profile from './Components/Profile/Profile'
import Account from './Components/Account/Account'
import Main from './Components/Main/Main'
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/account" component={Account} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
