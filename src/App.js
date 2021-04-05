import React, { useEffect } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        }));
      }

      else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    //BEM
    <div className="app">
      {/**Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        //App body
        <div className="app__body">
          {/**Sidebar */}
          <Sidebar />

          {/**Feed */}
          <Feed />

          {/**Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
