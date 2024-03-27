import React, {useEffect, useRef, useState} from 'react';

const UseRef = () => {

    //렌더링이 된 횟수를 조회하는 페이지를 만들고 싶다

    //단순하게 생각해보면, 아니그럼 그냥 useState쓰고 useEffect를 사용해서 렌더링 될때마다 카운팅 올려서 
    // 실행시키면 되는거 아닌가 ?
    const [count, setCount] = useState(0);
    //const [renderCount, setRenderCount] = useState(0);
    
    //여기서 무한 루프 발생
    // useEffect(() => {
    //     setRenderCount(renderCount + 1);
    // })

    //왜냐..? useEffect는 렌더링 될때 발생하는데 setRenderCount(renderCount + 1); 또한 렌더링을 발생시키고 
    // 그러면 다시 useEffect를 부르면서 무한대로 계속 렌더링을 시키게 된다.

    //이럴때 유용하게 사용되는게 useRef이다 

    const refUsing = useRef(0);

    //ref는 리렌더링을 발생 시키지 않기 떄문에 활용할 수 있는 것임
    useEffect(() => {
        refUsing.current += 1;
        console.log(refUsing.current);
    })

    //그래서 Ref는 변화는 감지해야 하나 그 변화가 rendering을 발생시키지 않아야하는 값을 다룰떄 활용된다.

    return (
        <div>
            <p>State: {count}</p>
            <button onClick={() => {setCount(count+1)}}>Rendering Button</button> || 
        </div>
    );
};


export default UseRef;