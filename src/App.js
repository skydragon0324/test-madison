import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
