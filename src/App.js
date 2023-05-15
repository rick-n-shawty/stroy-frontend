import logo from './logo.svg';
import './Styles/Main.css';
import {useState, useEffect, createContext} from 'react';
import Header from './Components/Header';
export const LanguageContext = createContext([])

function App() {
  const [rus, setRus] = useState(true)

  return (
    <LanguageContext.Provider  value={[rus, setRus]}>
      <>
       <Header/>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
