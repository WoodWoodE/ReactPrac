import './App.css'
import {useState, useRef, useReducer} from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import List from './Components/List'

function reducer (state, action) {

  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => action.targetId == item.id ? {...item, isDone : !item.isDone} : item)
    case "DELETE":
      return state.filter((item) => action.targetId !== item.id )
    default:
      return state;
  }

}

const mockData = [
  {
    id:0,
    isDone:false,
    content:"밥짓기",
    date: new Date().getTime()
  },
  {
    id:1,
    isDone:false,
    content:"React공부하기",
    date: new Date().getTime()
  },
]

function App() {

  const [state, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(2);

  const onCreate = (content) =>{
    dispatch({
      type:"CREATE",
      data: {    
        id:idRef.current++,
        isDone:false,
        content:content,
        date:new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId : targetId,
    })
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={state} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
