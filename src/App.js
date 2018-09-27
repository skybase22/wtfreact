import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";

class App extends Component {
  render() {
    return (
      
      <center><div>
        <div className ="font">Wellcome to Game!</div>
        <div className ="font2">Find My Name</div>
        <WordCard value="noppadol" />
      </div></center>
      
    );
  }
 }



export default App;
