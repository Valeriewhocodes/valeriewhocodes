import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Card from './components/card/card';
import Footer from './components/footer/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  return (<div className="App"> 
  <Header></Header>
  <Card></Card>
  <Footer></Footer> 
  </div>);
}

export default App;