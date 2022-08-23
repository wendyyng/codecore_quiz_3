import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage'
import NavBar from './components/NavBar'
import { User } from './requests';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NewAuctionPage from './components/NewAuctionPage';
import AuthRoute from './components/AuthRoute';

export default function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    getCurrentUser();
  }, [])
  

  const getCurrentUser = () => {
    return User.current().then(user => {

      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser( null )}

  return (
    <BrowserRouter>
      <NavBar currentUser={user} onSignOut={onSignOut} />
       <Switch>
       <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}
          >
          </Route>
          <Route exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
          ></Route>
          <Route exact path="/" component={WelcomePage} />
          <AuthRoute isAllowed={!!user} exact path='/auctions/new' component={NewAuctionPage} />
          <Route exact path='/auctions' component={AuctionIndexPage}/>
          <Route exact path='/auctions/:id' component={AuctionShowPage}></Route>
       </Switch>
    </BrowserRouter>
  );
}