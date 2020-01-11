import React, { Component } from 'react';
import ContactList from './components/ContactList'
import logo from './logo.svg';
import './App.css';
import contacts from '../src/data/contacts.json'
import Header from './components/misc/Header'

const App = () => (
  <div className="App">
    <Header />

    <div className="container">
      <div className="row">
        <div className="col-12">
          <ContactList />
        </div>
      </div>
    </div>
  </div>
)

export default App
