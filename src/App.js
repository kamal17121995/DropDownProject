import { useState } from 'react';
import './App.css';
import DropDown from './components/DropDown';

function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      <DropDown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
