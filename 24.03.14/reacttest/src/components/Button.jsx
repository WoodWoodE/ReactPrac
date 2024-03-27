const Button = ({text, color, children}) => {

    const buttonClickHandler  = (이벤트객체) => {
        console.log(이벤트객체)
    }

    return (
        <button 
            onClick={buttonClickHandler} // 함수이름을 전달
            style={{color:color}}>
            {text} -{color}
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: "black"
}

export default Button;