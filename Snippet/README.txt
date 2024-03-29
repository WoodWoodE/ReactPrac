*VSCODE snippets설정 

저장 위치 - C:\Users\Administrator\AppData\Roaming\Code\User\snippets

DeafaultCmpAArrowFuncCompCreate.code-snippets 파일 위에 저장 위치로 옮기면 snippet적용됨
(설정하는 디렉터리 위치는 컴퓨터에 따라 다를수 있음 - 잘안되면 말해주세유 )

* 기본 컴포넌트 생성시 dc하고 ctrl+spacebar누르고 dc 선택하면 파일이름으로 기본 컴포넌트 생성됨.

const 파일명 = () => {
  return (
    <div>
      *이 위치에 커서 자동 위치함*
    </div>
  );
}
  
export default 파일명;

* Arrow Fuction의 경우는 변수명 = 하고 af 작성하고 ctrl + spacebar눌러서 af선택하면 arrow function 생성됨.

const varName = af

	↓

const varName = () => {
	*이 위치에 커서 자동 위치함*
}