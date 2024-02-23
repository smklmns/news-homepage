import Header from './components/Header'
import Main from './components/Main'
import New from './components/New'
import Options from './components/Options'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div  className="App">
      <Header toggle={toggle} setToggle={setToggle}/>
      <Main />
      <New />
      <Options />
    </div>
  );
}

export default App;


//style={{opacity: toggle ? "0.33": "1"}}