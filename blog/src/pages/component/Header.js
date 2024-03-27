import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemContext';

const Header = () => {

    const {isDark, setIsDark} = useContext(ThemeContext);

    return (
        <header
            className='header'
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black"
            }}
        >
            <h1>Welcome My Home</h1>
        </header>
    );
};

//아래처럼도 사용 가능
const Header2 = () => {

    const data = useContext(ThemeContext);

    return (
        <header
            className='header'
            style={{
                backgroundColor: data.isDark ? "black" : "lightgray",
                color: data.isDark ? "white" : "black"
            }}
        >
            <h1>Welcome My Home</h1>
        </header>
    );
};

export default Header;