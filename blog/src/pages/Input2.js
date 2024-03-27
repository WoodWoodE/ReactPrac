import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name : "",
        email: "",
        tel: ""
    });
    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id
        setInputs({
            ...inputs,
            [id]: value
        });
        console.log("what's in inputs: "+ inputs);
    }

    const [blinkClicked, blinkClickFunc ] = useState("");
    const onClicked = () => {
        if(blinkClicked !== "clicked"){
            blinkClickFunc("clicked");
        }else{
            blinkClickFunc("unClicked");
        }
    }
    const {name, email, tel} = inputs;
    
    console.log("what's in inputs: "+ inputs.name + " : " + inputs.email + " : " + inputs.tel + " : ");
    
    return(
        <div>
            <div className={blinkClicked === "clicked" ? "blink" : "notBlink"} style={{  border: "3px solid white",
                                                                                         display: "inline-block"}}>
                <div>
                    <label>이름</label>
                    <input type="text" id="name" value={name} onChange={onChange} />
                </div>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>
                name : {name}
                <br/>
                email: {email}
                <br/>
                tel:   {tel}
            </p>
            <button className="blinkerBtn" onClick={onClicked}>click</button>
        </div>
    )
}

export default Input2;