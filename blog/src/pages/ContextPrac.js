import React, {useState} from 'react';

//2ThemContext.js에 존재하는 ThemContext라는 변수를 불러온다.
import { ThemeContext } from './Context/ThemContext';
import Page from "./component/Page"

const ContextPrac = () => {

    //1. 앱이 커지면 커질수록 사용처가 많아지는 state
    const [isDark, setIsDark] = useState(false); 

    //3. Provider 라는 것으로 감싸준다 
    //4. Context의 Provider는 value라는 Prop을 하나 받는다.
    //5. 이 value안에 전달하고자 하는 데이터를 담아 주면 된다.
    //        ㄴ 여러개를 보내야 하기 때문에 {{data1, data2}}와 같은 형식으로 Object로 만들어 보낸다
    //6. 이러면 모든 하위 컴포넌트들이 value에 있는 isDark와 setIsDark에 접근할 수 있게 된다.
    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {/*<Page isDark={isDark} setIsDark={setIsDark}/>*/}
            {/* 
                ThemeContext.Provider를 지정한 후 하위 컴포넌트에게 데이터 보내기- 모든 props를 삭제한다. 
                이제 Page.js로 이동해서 사용해보자.
            */}
            <Page/>
        </ThemeContext.Provider>
    );
};


export default ContextPrac;