import React , {useEffect} from 'react';

const Timer = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Now is ", new Date())
        }, 1000) ;

        //이 return은 Timer Component가 unmount, 즉 화면에서 사라질때 실행이 된다.
        return () => {
            clearInterval(timer);
            console.log("Timer is end")
        }

    },[])

    return (
        <div> 
            <span>Let's start Timer, Look at the console.</span>
        </div>
    );
};

export default Timer;