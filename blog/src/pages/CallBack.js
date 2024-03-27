import React, {useState} from "react";

//콜백의 사용도를 알고자 하는 것,
// 1. useState에서 set함수에서의 callback
// 2. useState에서 callback

const heavyWork = () => {
    console.log("엄청 무거운 작업");
    return ["홍길동", "엄홍길"];
}

const CallBack = () => {

    //const [names, setName] = useState(["홍길동","엄홍길"])

    // const [names, setName] = useState(heavyWork()); //초기값을 매번 할당하게됨 
    
    //매번 할당이 아니라 처음 한번만(첫 랜더링이 될때)
    //할당하게  하고싶다면 콜백 함수를 넣으면 된다.
    const [names, setName] = useState(() => {
       return heavyWork();
    });
                                                      
    const [input, setinput] = useState("");

    const changerHandler = (e) =>{
        setinput(e.target.value);
    }

    //onChange 이벤트가 발생할때 마다 이 컴포넌트 자체가 다시 실행되기에 콘솔 로그가 같이 출력 되는 거라고 함
    console.log("what's in there: ", input);

    const changeUpload = () => {
        setName((beforeState) => { //콜백으로 들어오는 argument는 이전에 input에 들어 있던 데이터들임
            console.log("beforeState에는 어떤 것이 들어 있는가: "+ beforeState);
            return [
                input, // 새롭게 추가할 요소
                ...beforeState // 기존에 있던 요소
            ]
            // 위 방식으로 하면 기존 요소에 새로운 요소가 추가된다.
        })
    }

    return (
        <div>   {/* 
                    value에 input 태그를 넣어주는 이유는 체인지 이벤트 발생시 글자를 입력한다면 '살'이란 
                    단어를 입력할때 ㅅ / ㅏ / ㄹ 이렇게 하나 하나가 value가 될텐데 그냥 빈 문자열을 넣으면
                    ㅅ따로 ㅏ따로 ㄹ따로 붙게됨, 그러나 value에 기존값을 넣어주면 기존값이 나와서 입력하는
                    글자와 합쳐짐 
                */}
            <input type="text" value={input}  onChange={changerHandler}/> 
            <button onClick={changeUpload}>업로드</button>
            {names.map((name, idx)=>{ // 리액트에서 맵을써서 엘리먼트를 가져오기 위해서는 key값이 필요하다
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default CallBack; // <- 실제 외부에서 import 될 때 보낼 함수, 변수