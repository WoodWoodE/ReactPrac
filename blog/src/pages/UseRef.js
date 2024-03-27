import React, {useRef, useState} from 'react';

const UseRef = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0); //ref를 접근하기 위해선 countRef.current 로 접근하면됨 
    //ref를 부르면 {current:value}의 형태로 저장시키기 때문임 

    console.log(countRef);
    const increaseCountState = () => {
        setCount(count + 1);
    }

    //ref는 값이 증가하긴 해도 rendering이 되지 않기 때문에 화면에 반영은 되지 않는다
    //렌더링을 시키는 무엇인가를 행동하면 반영이 되게 되어 있음.
    const increaseCountRef = () => {
        countRef.current += 1; 
        console.log("ref value: ", countRef.current); //이걸로 ref의 값의 변화를 볼 수 있음
    }

    //ref의 장점은 자주 변동되는 값이 state로 들어가면 재 렌더링이 너무 많이 반복되기에 성능을 떨구기 떄문임
    // 그럼 ref와 그냥 일반 변수와의 차이점이 무엇인가 ?

    let countVar = 0;

    const increaseCountVal = () => {
        countVar += 1;
        console.log("var value: ",countVar)
    }
    //렌더링이 되더라도 화면엔 반영 되지 않음, 왜? 
    // 잘 생각해보면 컴포넌트의 렌더링은 컴포넌트를 나타내는 함수를 다시 부른다는 것임 
    // 함수가 불리면 변수는 새롭게 초기화가 되게 되어 있기에 사실 화면에 반영되지 않는 것이 아니라 
    // 값이 초기화되면서 0이 되는 것임

    //ref는 컴포넌트가 아무리 변해도 값을 유지함, ref는 컴포넌트의 전생애주기동안 유지가 되기 때문임
    // 컴포넌트가 브라우저에 마운팅 된 시점에서 마운팅 해제되는 시점까지 값을 유지할 수 있음

    const printResults = () => {
        console.log("ref val: " + countRef.current + " , var val: "+ countVar);
    }

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={increaseCountState}>State Button</button> || 
            <button onClick={increaseCountRef}>Ref Button</button> 
            <button onClick={increaseCountVal}>Val Button</button> 
            <button onClick={printResults}>print Button</button> 
        </div>
    );
};


export default UseRef;