import React, {useEffect, useRef} from 'react';

const UseRefManifDom = () => {

    const inputRef = useRef("Test");

    //첫 렌더링에 만 실행될 useEffect
    useEffect(() => {
        //console.log(inputRef); - input 태그에 대한 정보를 모두 갖고 잇어 이를 통해 input을 컨트롤 할 수 있음

        //자동 포커스를 지정
        inputRef.current.focus();
    },[])

    const login = () => {
        alert(`Hello,${inputRef.current.value}!`); 
        //backtick을 사용하면 템플릿 리터럴 이라고 내부에 +를 사용하지 않더라도 
        // 문자열에 표현식 / 문자열 삽입, 여러 줄 문자열, 문자열 형식화, 문자열 태깅 등 다양한 기능의 사용이 가능하다

        //경고창 이후 재 포커스 설정
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type='text' placeholder='username'/>
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default UseRefManifDom ;