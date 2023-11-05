import React, {useEffect} from 'react';
import './App.css';
import Card from './components/card/card';
import { useState } from 'react';
import { BrowserRouter  as Route, Link, Routes} from "react-router-dom";
import { FeaturedPage } from './router/pages/FeaturedPage';
import { Home } from './router/pages/Home';
import MainContext from './store';
import Router from './router/Router';

const App = () => {
  
  return (
    <MainContext>
   <Router/></MainContext>
  );
};
export default App
