import React from 'react'; 
import {Link} from 'react-router-dom';
import {LanguageContext} from '../App';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
export default function Main(){
    const [rus, setRus] = useContext(LanguageContext)
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const videoRes = await axios.get('/videos')
                const videoData = await videoRes.data.videos 
                const arr = videoData.map(item => {
                    return <iframe
                    className='video-frame' 
                    key={item._id}
                    width="100%"
                    height="220px"
                    src={item.url}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullscreen></iframe>
                })
                console.log(arr)
                setVideos(arr)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
        <main className="main-section">
            <section className="banner-section">
                <h2>СДЕЛАЕМ  КАЧЕСТВЕННЫЙ И УЮТНЫЙ РЕМОНТ ВАШЕЙ КВАРТИРЫ "ПОД КЛЮЧ" В САНКТ ПЕТЕРБУРГЕ  ОТ 7900 Р/М2 </h2>
                <h3>УЖЕ ВЫПОЛНИЛИ БОЛЕЕ 825 ОБЪЕКТОВ ЗА 5 ЛЕТ РАБОТЫ, ПОЭТОМУ ЗНАЕМ КАК СДЕЛАТЬ РЕМОНТ БЫСТРЕЕ И СЭКОНОМИТЬ ДО 30% ВАШЕГО БЮДЖЕТА</h3>
                <div className="perk-list">
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wallet_Flat_Icon.svg/1024px-Wallet_Flat_Icon.svg.png?20180301073008'></img>
                        <div className='text'>
                            <h3>No money</h3>
                            <p>Оплачивайте работу только после выполнения и проверки качества</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/2048px-Circle-icons-document.svg.png"></img>
                        <div className='text'>
                            <h3>Insurance 100%</h3>
                            <p>
                            Фиксированная смета и официальный договор с гарантией 5 лет
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.pngrepo.com/png/191856/512/alarm-clock-clock.png"></img>
                        <div className='text'>
                            <h3>We will get it done on time</h3>
                            <p>Держим сроки или платим неустойку 1% за каждый день просрочки</p>
                        </div>
                    </div>
                </div>
                <div className="calc-link">
                    <button>Find out price</button>
                </div>
            </section>

            <section className="risk-section">
                <div className="top">
                    <h1>C ЧЕМ ВЫ МОЖЕТЕ СТОЛКНУТЬСЯ ПРИ ЗАКАЗЕ  РЕМОНТА КВАРТИРЫ?</h1>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>Text</h3>
                        </div>
                        <p>
                            Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>Text</h3>
                        </div>
                        <p>
                            Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>Text</h3>
                        </div>
                        <p>
                            Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>Text</h3>
                        </div>
                        <p>
                            Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                        </p>
                    </div>
                </div>
            </section>
            <section className="review-section">
                <div className='bg-image'> 
                    <div className='top'>
                        <h1>РЕАЛЬНЫЕ  ОТЗЫВЫ </h1>
                        <h2>ДОВОЛЬНЫЕ КЛИЕНТЫ ЭТО ЛУЧШЕЕ ПОДТВЕРЖДЕНИЕ КАЧЕСТВА НАШИХ УСЛУГ</h2>
                    </div>
                    <div className='bottom'>
                        {videos}
                    </div>
                </div>
            </section>
            <section className="certificate-section">
                <div className='top'>
                    <h1>С НАМИ  БЕЗОПАСНО</h1>
                </div>
                <div className='bottom'>
                    <img className='certificate-img' src='https://i.1.creatium.io/98/be/36/096c7c193aefc6dc115c89602720372e18/480x480q8/01dogovor_svidetelstvo555.png'></img>
                    <div className='text-cards'>
                        <div className='card'>
                            <div className='notch'>
                                <img src='https://i.1.creatium.io/97/2e/6a/5bfaddff57b8bcc32c53068ab2e0c135de/35x35q8/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8E%D1%81.png'></img>
                                <h3>Работаем официально</h3>
                            </div>
                            <p>Зарегистрированы как ООО, платим налоги и предоставляем необходимые закрывающие документы, акты, чеки</p>
                        </div>
                        <div className='card'>
                            <div className='notch'>
                                <img src='https://i.1.creatium.io/97/2e/6a/5bfaddff57b8bcc32c53068ab2e0c135de/35x35q8/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8E%D1%81.png'></img>
                                <h3>Оформляем договор</h3>
                            </div>
                            <p>Выполняем работы строго по договору в котором прописаны все условия, обязанности и ответственность</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section"></section>
            <section className="portfolio-section"></section>
            <section className="calc-section"></section>
        </main>
    )
}