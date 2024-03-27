
// 리엑트 컴포넌트를 만드는 방식

// 1. 함수형 컴포넌트 

// import React from "react"; 
// function Home(){
//     return <h1>홈화면 함수 컴포넌트</h1>
// }

// export default Home;

// 2. 클래스형 컴포넌트

// import React, {Component} from "react";

// class Home extends Component {
//     render() {
//         return <h1>홈화면 클래스 컴포넌트</h1>
//     }
// }

// export default Home;

// 둘중 모두 상관 없으나 최근엔 함수형 컴포넌트로 많이 개발하는 추세기에 함수형으로 사용해보려고함

import React from "react"; 

const Home = () => {
    return <h1>홈화면 함수 컴포넌트</h1>
}

export default Home;