import axios from "axios";
import { LanguageContext } from "../App";
import { useContext, useState } from 'react';
import closeIcon from '../Images/close-icon.svg';
export default function Header(){
    const [rus, setRus] = useContext(LanguageContext)
    const [isPriceActive, setPriceActive] = useState(false)
    const [isContactActive, setContactActive] = useState(false)
    const [phoneNum, setPhoneNum] = useState('')
    const [error, setError] = useState('')
    const handleLngChange = (e) => {
        if(e.target.value === 'option1'){
            setRus(true)
        }else{
            setRus(false)
        }
    }
    const togglePrice = (e) => {
        if(isContactActive == true){
            setContactActive(false)
        }
        setPriceActive(true)
    }
    const toggleContact = (e) => {
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
        }catch(err){
            console.log(err)
        }
    }
    const closeWindown = (e) => {
        if(e.target.id === 'price-btn'){
            setPriceActive(false)
            console.log(false)
        }else if(e.target.id === 'contact-btn'){
            setContactActive(false)
        }
    }
    return(
        <>
        <header className="main-header">
            <div className="left-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"></img>
                <p>
                    { rus ? "Делаем качественный ремонт квартир 'под ключ' в Санкт Петербурге, без предоплаты, c гарантией в договоре 5 лет" : 
                    "Biz Sankt-Peterburgda yuqori sifatli kalit taslim bo'lgan kvartirani oldindan to'lovsiz, shartnomada 5 yil kafolat bilan ta'mirlaymiz." }</p>
            </div>
            <div className="right-section">
                <button id="price-button" className={isPriceActive ? "price-btn active" : "price-btn"} onClick={togglePrice}>
                    { rus ? "Цены + примеры сметы" : "Narxlar + taxminiy misollar"}
                </button>
                <button id="contact-button" onClick={toggleContact} className={isContactActive ? "contact-btn active": "contact-btn"}>
                    { rus ? "Связаться с прорабом" : "Ustaga murojaat qiling"}
                </button>
                <select id="options" onChange={handleLngChange}>
                    <option value={'option1'}>Русский язык</option>
                    <option value={'option2'}>Ozbek tili</option>
                </select>
            </div>

            <div className={isPriceActive ? "hidden-price active" : "hidden-price"}>
                <div className="notch">
                    <button id="price-btn" onClick={closeWindown}><img id="price-btn" src={closeIcon}></img></button>
                </div>
                <div className="main">
                    <p>Отправим 3 варианта сметы, выполненных нами объектов + подробный прайс, актуальный на 2023 год</p>
                    <input onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum} placeholder="Номер:"/>
                    <button onClick={sendPriceRequest}>Готово</button>
                </div>
            </div>

            <div className={isContactActive ? "hidden-contact active" : "hidden-contact"}>
                <div className="notch">
                    <button id="contact-btn" onClick={closeWindown}><img id="contact-btn" src={closeIcon}></img></button>
                </div>
                <div className="main">
                    <p>Получите консультацию от профессионала</p>
                    <input placeholder="Номер" onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum}/>
                    <button onClick={sendContactRequest}>Связаться с прорабом</button>
                </div>
            </div>
        </header>
      </>
    )
}