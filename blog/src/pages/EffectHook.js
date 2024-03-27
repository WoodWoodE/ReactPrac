import React, { useState, useEffect } from "react";

/*
    useEffect란?
    어떤 컴포넌트가 mount 되었을때 ,update되었을때, mount 해제되었을때 특정 작업을 처리할 코드를 실행시켜주는 기능이다.

    useEffect Hook은 인자로 callback 함수를 받는다.

    useEffect는 2가지 형태가 존재한다.
    1. useEffect(callback func) - 컴포넌트가 랜더링 될때 마다 실행
    2. useEffect(callback func, dependency Array) - 컴포넌트가 맨처음 랜더링 될때, dependency Array가 변경될때 만 실행

*/

const EffectHook = () => {

    let [count, setCount] = useState(1);
    let [name, setName] = useState("")

    let handleCountUpdate = () =>{
        setCount(count+1);
    }

    let handleInputChange = (e) => {
        setName(e.target.value)
    }

    // 마운트, 랜더링, 언마운트 될때마다 매번 실행된다.
    useEffect(() => {
        console.log("마운트, 랜더링, 언마운트시 매번 실행")
    })



    // 2번째 인자로 온 값(name)이 변할 때만 useEffect를 실행 해줌
    useEffect(() => { 
        console.log("마운트, 값(name)의 변경시 실행")
        
    //마운팅 될때, value의 값이 변경될때만 실행함 
    }, [name]); //-이 값이 변할 때만 랜더링을 해줄 것 

    // 2번째 인자로 온 값(count)이 변할 때만 useEffect를 실행 해줌
       useEffect(() => { 
        console.log("마운트, 값(count)의 변경시 실행")
        
    //마운팅 될때, value의 값이 변경될때만 실행함 
    }, [count]); //-이 값이 변할 때만 랜더링을 해줄 것 
    
    //2번째 인자로 []빈 배열이 온 경우, 마운팅 될때만 실행함
    useEffect(() => { 
        console.log("마운팅 될 때만 실행")

    // }  
    }, []); // 빈 배열([])은 처음 마운팅 될때만 실행됨

    return(
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange}/>
            <span>{name}</span>
        </div>
    )
}

export default EffectHook;
