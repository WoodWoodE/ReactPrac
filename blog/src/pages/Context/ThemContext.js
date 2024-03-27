//1. 리액트 컨텍스트를 만드려면 우선 createContext를 import 해와야 한다.
import { createContext } from "react";

//2. 기본 값으로 null 을 넣어주면서 여기까지만 하면 Context를 하나 만들었다고 보면 된다.
export const ThemeContext = createContext(null);

//3. 이후 ThemeContext를 사용하려는 곳에 import해준다.(여기서는 최상단인 ContextPrac 에 해준다)
//   import 해줄때 보면 외부에 보내주는 export에 사용한 변수 명을 {}에 넣어주면서 import 하는 것을 볼 수 있다.