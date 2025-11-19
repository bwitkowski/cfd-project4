import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {

  const [userName, setUserName] = useState("bryan");

  return (
    <div className="App">
      <Header />
      <h1>Cubs Stink!!!</h1>
      <div>
        <label>UserName:</label>
        <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text"></input>
      </div>

      <h1>{userName}</h1>
      <Footer />
    </div>
    
  );
}

export default App;
