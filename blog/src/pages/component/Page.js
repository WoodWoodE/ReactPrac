import React, {useContext, useState} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from '../Context/ThemContext';

const Page = ({isDark, setIsDark}) => {

    //1. isDark와 setIsDark는 Page라는 컴포넌트에선 전달하기 위해서만 받고 있음

    //2. 지금은 문제 없으나 중간 컴포넌트의 갯수가 많이지면 많아 질수록 불편해질 것임

    //3. Context를 사용해보면 Prop를 사용하지 않고 공유 할 수 있음


    //1. ThemeContext 설정 이후 가져온 데이터를 useContext Hook 을 사용해서 이용한다.
    //2. const 변수 = useContext(Context 함수 명)
    // const data = useContext(ThemeContext);
    //3. 이 data안에 뭐가 들어 있는지 확인 해보기 위해 console을 찍어보자 
    // console.log("What's in there - ", data);
    //What's in there -  {isDark: false, setIsDark: ƒ}

    //그런데 사실 Page.js는 Props 들을 사용하는게 아니라 전달만 해주는 것이기에 위에 과정 자체가 필요가 없는 얘임
    // 그렇기에 위에 과정과 아래 Props를 보내는 부분을 주석 처리해두고 자료로 남겨 두겠음

    return (
        <div>

            {/* <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/> */}

            {/* 이제 하위 컴포넌트에서 사용하기 위해서 태그의 Props 들을 제거해보자 */}
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};


export default Page;