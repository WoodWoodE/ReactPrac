/* eslint-disable */

import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import EffectHook from './pages/EffectHook';
import EffectHookCleanUp from './pages/EffectHookCleanUp';
import UseRef from './pages/UseRef';
import Input2 from './pages/Input2';
import List from './pages/List';
import CallBack from './pages/CallBack';
import UseRefManifDom from './pages/UseRefManifDom';
import UseRefUsefullEnv from './pages/UseRefUsefullEnv';
import ContextPrac from './pages/ContextPrac';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>home</Link> ||
        <Link to='/about'>about</Link> ||
        <Link to='/counter'>counter</Link> ||
        <Link to='/input'>input</Link>  ||
        <Link to='/input2'>input2</Link> ||
        <Link to='/list'>list</Link> ||
        <Link to='/callBack'>call-back</Link> ||
        <Link to='/effectHook'>effectHook</Link> ||
        <Link to='/effectHookCleanUp'>effectHookCleanUp</Link> ||
        <Link to='/useRef'>useRef</Link> ||
        <Link to='/useRefUsefullEnv'>useRefUsefullEnv</Link> ||
        <Link to='/useRefManifDom'>useRefManifDom</Link> ||
        <Link to='/contextPrac'>contextPrac</Link> ||
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/input2' element={<Input2/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/callBack' element={<CallBack/>}/>
        <Route path='/effectHook' element={<EffectHook/>}/>
        <Route path='/effectHookCleanUp' element={<EffectHookCleanUp/>}/>
        <Route path='/useRef' element={<UseRef/>}/>
        <Route path='/useRefUsefullEnv' element={<UseRefUsefullEnv/>}/>
        <Route path='/useRefManifDom' element={<UseRefManifDom/>}/>
        <Route path='/contextPrac' element={<ContextPrac/>}/>
      </Routes>
    </div>
  );
}

export default App;
