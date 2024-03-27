import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemContext';

const Content = () => {

    const {isDark, setIsDark} = useContext(ThemeContext)

    return (
        <div
            className='content'
            style={{
                backgroundColor : isDark ? "black" : "white",
                color : isDark ? "white" : "black"
            }}
        >
            <p>홍길동님, 좋은 하루 되세요</p>
        </div>
    );
};

//아래처럼 사용도 가능

const Content2 = () => {

    const data = useContext(ThemeContext)

    return (
        <div
            className='content'
            style={{
                backgroundColor : data.isDark ? "black" : "white",
                color : data.isDark ? "white" : "black"
            }}
        >
            <p>홍길동님, 좋은 하루 되세요</p>
        </div>
    );
};

export default Content;