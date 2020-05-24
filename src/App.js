import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';

function App() {
  return (
    <div className="appWrapper">
    <Header />
    <Nav />
    <Content />
    </div>
  );
}

export default App;
