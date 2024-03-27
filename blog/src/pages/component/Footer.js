import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemContext';

const Footer = () => {

    const {isDark, setIsDark} = useContext(ThemeContext);

    const changeColor = () => {
        setIsDark(!isDark)
    }

    return (
        <div
            style={{
                backgroundColor : isDark ? "black" : "lightgray",
                color : isDark ? "white" : "black"
            }}
        >
            <button className='button' onClick={changeColor}>colorChanger</button>
        </div>
    );
};

//아래처럼도 사용 가능
const Footer2 = () => {

    const data = useContext(ThemeContext);

    const changeColor = () => {
        data.setIsDark(!data.isDark)
    }

    return (
        <div
            style={{
                backgroundColor : data.isDark ? "black" : "lightgray",
                color : data.isDark ? "white" : "black"
            }}
        >
            <button className='button' onClick={changeColor}>colorChanger</button>
        </div>
    );
};

export default Footer;