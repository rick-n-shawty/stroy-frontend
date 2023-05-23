import logo from './logo.svg';
import './Styles/Main.css';
import {useState, useEffect, createContext} from 'react';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Calc from './Components/Calc';
export const LanguageContext = createContext([])

function App() {
  const [rus, setRus] = useState(true)
  axios.defaults.baseURL = 'https://stroy-server.onrender.com/api/v1'
  return (
    <LanguageContext.Provider  value={[rus, setRus]}>
      <>
       <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/calc' element={<Calc/>}/>
        </Routes>
       <Footer/>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
