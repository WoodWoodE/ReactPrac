import './App.css'
import Bulb from "./components/Bulb"
import Counter from "./components/Counter"

function App() {
  console.log('App Comp Re-Rendering');
  return (
    <>
      <div>
        <Bulb/>
        <Counter/>
      </div>
    </>
  )
}

export default App
