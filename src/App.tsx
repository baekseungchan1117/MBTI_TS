import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/question' element={<QuestionPage />}/>
        <Route path='/reuslt' element={<ResultPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
