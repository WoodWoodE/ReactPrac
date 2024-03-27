/* eslint-disable */

import Home from './pages/Home';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  let 제목 = '한국 고기 맛집';
  let [글제목, 글제목변경함수] = useState(["신천 고기 맛집", "천호 고기 맛집","강남 고기 맛집"])
  let [엄지척, 엄지척변경함수] = useState(0)
  return (
    <div className="App">
      <Home/>
      <div className="black-nav">
        <h4 style={{color:"red", textAlign:"center"}}>{제목} 블로그</h4>
      </div>
      <button onClick={()=>{
        let 글제목카피 = [...글제목];
        글제목카피[2] = "송파 고기 맛집";
        글제목변경함수(글제목카피);
        }}>글제목 변경 버튼</button>
        <button onClick={()=>{
          let 글제목카피카피 = [...글제목];
          글제목카피카피.sort();
          글제목변경함수(글제목카피카피);
        }}>가나다 순 정렬</button>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={()=>{엄지척변경함수(엄지척+1)}} style={{cursor:"pointer"}}>🤘</span>{엄지척}
        </h4>
        <p>
          2월 27일 발행
        </p>
      </div>
      <div className="list">
        <h4>
          {글제목[1]}
        </h4>
        <p>
          3월 27일 발행
        </p>
      </div>
      <List title={글제목} index='1'/>
      <List title={글제목} index='2'/>
      <List title={글제목} index='0'/>
      <nav>
        <Link to='/about'>about</Link>
      </nav>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

function Modal(){
  return(
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div> 
  );
}

function List(props){
  return(
    <div className="list">
    <h4>
      {props.title[props.index]}
    </h4>
    <p>
      4월 27일 발행
    </p>
  </div>
  );
}

export default App;
