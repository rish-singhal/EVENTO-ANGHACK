import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import AboutC from './Pages/AboutC/AboutC';
import Navigation from './Components/Nav/Nav';
import Chatbox from './Components/Chatbox/Chatbox';
export default class LandingPage extends Component {
  render() {
    return (
      <div className='App'>
        <Chatbox />
        <Navigation />
        <Header />
        <AboutC />
      </div>
    );
  }
}