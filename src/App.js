import logo from './logo.svg';
import './Styles/Main.css';
import {useState, useEffect, createContext} from 'react';
import Header from './Components/Header';
import axios from 'axios';
export const LanguageContext = createContext([])

function App() {
  const [rus, setRus] = useState(true)
  axios.defaults.baseURL = 'http://localhost:8080/api/v1'
  return (
    <LanguageContext.Provider  value={[rus, setRus]}>
      <>
       <Header/>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
