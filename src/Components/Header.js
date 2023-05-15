import { LanguageContext } from "../App";
import { useContext } from 'react';
export default function Header(){
    const [rus, setRus] = useContext(LanguageContext)
    const handleLngChange = (e) => {
        if(e.target.value === 'option1'){
            setRus(true)
        }else{
            setRus(false)
        }
    }
    return(
        <header className="main-header">
            <div className="left-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"></img>
                <p>
                    { rus ? "Делаем качественный ремонт квартир 'под ключ' в Санкт Петербурге, без предоплаты, c гарантией в договоре 5 лет" : 
                    "Biz Sankt-Peterburgda yuqori sifatli kalit taslim bo'lgan kvartirani oldindan to'lovsiz, shartnomada 5 yil kafolat bilan ta'mirlaymiz." }</p>
            </div>
            <div className="right-section">
                <button>{ rus ? "Цены + примеры сметы" : "Narxlar + taxminiy misollar"}</button>
                <button>{ rus ? "Связаться с прорабом" : "Ustaga murojaat qiling"}</button>
                <select id="options" onChange={handleLngChange}>
                    <option value={'option1'}>Русский язык</option>
                    <option value={'option2'}>Ozbek tili</option>
                </select>
            </div>
        </header>
    )
}