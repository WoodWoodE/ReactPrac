import "./List.css"
import {useState, useMemo} from 'react'
import Todoitem from "./Todoitem";

const List = ({todos, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=>{
      return todo.content.toLowerCase().includes(search.toLowerCase());
    })
  }

  const filteredTodos = getFilteredData();

  const {totalCount, doneCount ,notDoneCount} = useMemo(() => {
    console.log("Memoization함")
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=> todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount : totalCount,
      doneCount : doneCount,
      notDoneCount : notDoneCount
    }
  }, [todos])

  return (
    <div className="List">
      <h4>Todo List🎈</h4>
      <div>total = {totalCount}, done={doneCount}, notDone = {notDoneCount}</div>
      <input value={search} placeholder="검색어를 입력해주세요" onChange={onChangeSearch}/>
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return <Todoitem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })}
      </div>
    </div>
  );
}
  
export default List;