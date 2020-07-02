import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Home from './Home';
import DataState from './DataState';
import Person from './PersonList';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import ArraOne from './Array1';
import Doctor from './Doctor';
import Crud from './Crud';
import Company from './Company'

const componentData =(
  <HashRouter>
  <Header/>
    <Route exact path = "/" component = {App} />
    <Route exact path = "/home" component = {Home} />
    <Route exact path = "/data-state" component = {DataState} />
    <Route exact path ="/array-one" component= {ArraOne}/>
    <Route exact path ="/doctor" component= {Doctor}/>
    <Route exact path ="/crud" component= {Crud}/>
	<Route exact path ="/company" component= {Company}/>
    <Footer/>
  </HashRouter>
);
ReactDOM.render(componentData, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
