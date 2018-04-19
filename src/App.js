// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyD1Jb4iTmmKPn0siyG-NTtqXONHO1InaSY",
    authDomain: "massage30011.firebaseapp.com",
    databaseURL: "https://massage30011.firebaseio.com",
    projectId: "massage30011",
    storageBucket: "massage30011.appspot.com",
    messagingSenderId: "794518664902"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Message Firebase" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;