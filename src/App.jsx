import Todo from "./Redux_TODO/todo"
import { createStore } from "redux"
import reducer from "./Redux_TODO/reducer"
import { Provider } from "react-redux"



function App() {

  let store=createStore(reducer)


  return (
    <>

<Provider store={store}>
<Todo/>
</Provider>


      
    </>
  )
}

export default App
