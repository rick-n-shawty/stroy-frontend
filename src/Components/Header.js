import axios from "axios";
import { LanguageContext } from "../App";
import { useContext, useState } from 'react';
import closeIcon from '../Images/close-icon.svg';
import logo from '../Images/Ecostroy.jpg';
import { useNavigate } from "react-router-dom";
export default function Header(){
    const [rus, setRus] = useContext(LanguageContext)
    const [isPriceActive, setPriceActive] = useState(false)
    const [isContactActive, setContactActive] = useState(false)
    const [phoneNum, setPhoneNum] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    const handleLngChange = (e) => {
        if(e.target.value === 'option1'){
            setRus(true)
        }else{
            setRus(false)
        }
    }
    const togglePrice = (e) => {
        const root = document.getElementById('overlay')
        root.setAttribute('class', 'overlay active')
        if(isContactActive == true){
            setContactActive(false)
        }
        setPriceActive(true)
    }
    const toggleContact = (e) => {
        const root = document.getElementById('overlay')
        root.setAttribute('class', 'overlay active')
        if(isPriceActive === true){
            setPriceActive(false)
        }
        setContactActive(true)
    }
    const sendPriceRequest = async() => {
        try{
            if(phoneNum.length < 10){
                setError("Invalid phone number")
                return  
            }
            const res = await axios.post('/telegram/prices', {phoneNumber: phoneNum})
            console.log(await res.data)
            setError('')
            setMsg('Заявка была отправленна!')
            setPhoneNum('')
        }catch(err){
            console.log(err)
        }
    }
    const sendContactRequest = async() => {
        try{
            if(phoneNum.length < 10) {
                return  
            }
            const res = await axios.post('/telegram/contact', {phoneNumber: phoneNum})
            console.log(await res.data)
            setMsg('Заявка была отправленна!')
        }catch(err){
            console.log(err)
        }
    }

    const closeWindow = (e) => {
        const root = document.getElementById('overlay')
        root.removeAttribute('class')
        root.setAttribute('class', 'overlay')
        if(e.target.id === 'contact-btn'){
            setContactActive(false)
        }else if(e.target.id === 'price-btn'){
            setPriceActive(false)
        }
    }
    return(
        <>
        <header className="main-header">
            <div className="left-section">
                <img src={logo} onClick={(e) => navigate('/')}></img>
                <p>
                    { rus ? "Делаем качественный ремонт квартир 'под ключ', без предоплаты, c гарантией в договоре 5 лет" : 
                    "Тошкентда квартиларни сифатли таъмирлаш хизмати, 1 йил кафолат билан." }</p>
            </div>
            <div className="right-section">
                <button id="price-button" className={isPriceActive ? "price-btn active" : "price-btn"} onClick={togglePrice}>
                    { rus ? "Цены + примеры сметы" : "Нар + смета наъмуналари"}
                </button>
                <button id="contact-button" onClick={toggleContact} className={isContactActive ? "contact-btn active": "contact-btn"}>
                    { rus ? "Связаться с прорабом" : "Прорабга мурожаат килинг"}
                </button>
                <select id="options" onChange={handleLngChange}>
                    <option value={'option1'}>Русский язык</option>
                    <option value={'option2'}>Ozbek tili</option>
                </select>
            </div>



            <div className={isPriceActive ? "hidden-price active" : "hidden-price"}>
                <div className="notch">
                    <button id="price-btn" onClick={closeWindow}><img id="price-btn" src={closeIcon}></img></button>
                </div>
                <div className="main">
                    <p>{rus ? "Отправим 3 варианта сметы, выполненных нами объектов + подробный прайс, актуальный на 2023 год" : 
                    "Biz tugatgan ob'ektlarni baholash uchun 3 ta variantni + 2023 yilga tegishli batafsil narxlar ro'yxatini yuboramiz."}</p>
                    <input placeholder={rus? "Номер" : "Raqam"} onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum}/>
                    {msg ? msg : <button onClick={sendPriceRequest}>{rus ? "Готово" : "Tayyor"}</button>}
                </div>
            </div>

            <div className={isContactActive ? "hidden-contact active" : "hidden-contact"}>
                <div className="notch">
                    <button id="contact-btn" onClick={closeWindow}><img id="contact-btn" src={closeIcon}></img></button>
                </div>
                <div className="main">
                    <p>{ rus ? "Получите консультацию от профессионала" : "Professionaldan maslahat oling"}</p>
                    <input placeholder={rus? "Номер" : "Raqam"} onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum}/>
                    {msg ? msg : <button onClick={sendContactRequest}>{rus ? "Готово" : "Tayyor"}</button>}
                </div>
            </div>


        </header>
      </>
    )
}