import React, { useState} from "react";
import Timer from "./component/Timer";

/*
    useEffect CleanUp 이란?
    어떤 기능을 사용했을때 그 기능을 정리해줘야만 하는 경우가 있다.
    가령 예를 들어 타이머를 만든다고 할때 그 타이머를 실행한다면 정지시켜줘야만 하는 상황이 생기는데
    이렇게 실행한 기능을 정리해주는 것을 clean up 이라고 한다.

    clean up은 useEffect의 콜백 함수 내부에서 return을 시키면서 기능을 넣어주면 된다.

    이에 대한 내용은 component의 Timer.js를 보자.
*/

const EffectHookCleanUp = () => {

    const [showTimer, setShowTimer] = useState(false);
    
    return(
        <div>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>ToggleTimer</button>
        </div>
    )
}

export default EffectHookCleanUp;
