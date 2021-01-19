import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';
import SignUp from './components/SignUp/index'; 
import SignIn from './components/SignIn/index';
import Dashboard from './components/Dashboard/Home/index';
import Profile from './components/Dashboard/Profile/index';
import Product from './components/Dashboard/Product/index';
import Api from './components/Dashboard/Api/index';
import {auth, firestore} from './config/firebase';


 
const App = () => {
  const [user, setUser] = useState('');

  useEffect (() => {
    auth.onAuthStateChanged( async (userData) => {
      if (userData){
        const profile = await firestore.collection('users').doc(userData.uid).get();

        if (profile.exists){
          setUser(profile.data().fullName);

        }
      }
        else{
          setUser('');
        }
      
    })
  },[]);
  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('uid');

  }
  return (
    <BrowserRouter>
     <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>

        < Route path='/signup'>
          <SignUp />
        </Route>

        < Route path='/login'>
          <SignIn />
        </Route>

        <Route path='/dashboard'>
          <Dashboard displayName={user} handleLogout={handleLogout}/>
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/product">
          <Product displayName={user}/>
        </Route>

        <Route path="/api">
          <Api />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
