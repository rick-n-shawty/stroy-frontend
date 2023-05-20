import React from 'react'; 
import {Link} from 'react-router-dom';
import {LanguageContext} from '../App';
import {useState, useEffect, useContext} from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
import closeIcon from '../Images/close-icon.svg'


import {Swiper, useSwiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.css"

import PortfolioCard from './PortfolioCard';

export default function Main(){
    const [rus, setRus] = useContext(LanguageContext)
    const [videos, setVideos] = useState([])
    const [workers, setWorkers] = useState([])
    const [isHidden, setIsHidden] = useState(true)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
                const workerRes = await axios.get('/employee')
                const workersArr = await workerRes.data.employees
                const workerCards = workersArr.map(item => {
                    return <EmployeeCard 
                    key={item._id} 
                    name={item.name} 
                    position={item.position}
                    picture={item.picture}
                    exp={item.experience}
                    desc={item.description}
                    />
                })
                setWorkers(workerCards)
                console.log(workersArr)
                setVideos(arr)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const toggleWindow = (e) => {
        const root = document.getElementById('root')
        if(isHidden){
            setIsHidden(false)
            root.setAttribute('class', 'overlay')
        }else if(isHidden == false){
            setIsHidden(true)
            root.removeAttribute('class')
        }
    }
    const signUp = async () => {
        try{
            const res = await axios.post('/telegram/excursion', {name, phoneNumber}, {headers: {"Content-Type": "application/json"}})
            console.log(await res.data)
        }catch(err){
            console.log(err)
        }
    }
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
            <section className="team-section">
                <div className='top'>
                    <h1> КТО БУДЕТ  ДЕЛАТЬ РЕМОНТ?</h1>
                    <h2>Только проверенные, адекватные специалисты с реальным опытом и профессиональным инструментом. Всегда трезвые, соблюдают дисциплину и аккуратно относятся к вашему имуществу</h2>
                </div>
                <div className='bottom'>
                    {workers}
                </div>
            </section>

            <section className="portfolio-section">
                <div className='top'>
                    <h1>НЕКОТОРЫЕ НАШИ РАБОТЫ</h1>
                </div>


                <div className='bottom'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        // scrollbar={{draggable: true}}
                        // pagination={{clickable: true}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <PortfolioCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <PortfolioCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="calc-section">
                <div className='top'>
                    <h1>ПРИМЕРНЫЙ РАСЧЁТ СТОИМОСТИ РЕМОНТА</h1>
                </div>
                <div className='bottom'>
                    <div className='container'>
                        <div className='input-box'>
                            <h3>Площадь квартиры, м2</h3>
                            <input placeholder='50' type='number'/>
                        </div>
                        <div className='check-boxes'>
                            <div className='condition'>
                                <h3>Состояние квартиры</h3>
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    Вторичка со старым ремонтом
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    Вторичка со старым ремонтом
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    Вторичка со старым ремонтом
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    Вторичка со старым ремонтом
                                </label>   
                            </div>
                            <div className='type'>
                                <h3>Тип ремонта</h3>
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    Черновая отделка
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    Черновая отделка
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    Черновая отделка
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    Черновая отделка
                                </label>                
                            </div>
                        </div>
                        <div className='total-output'>
                            <div className='box standard'>
                                <div className='name'>Стандарт</div>
                                <div className='price'>51000</div>
                            </div>
                            <div className='box comfort'>
                                <div className='name'>Комфорт</div>
                                <div className='price'>215000</div>
                            </div>
                            <div className='box premium'>
                                <div className='name'>Премиум</div>
                                <div className='price'>252000</div>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button>Расчитать по подробнее</button>
                            <button>Записаться на размер</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='excursion-section'>
                <div className={isHidden ? "hidden-window" : "hidden-window active"}>
                    <div className='notch'>
                        <div className='text'>
                            <h3>Экскурсия по объектам</h3>
                        </div>
                        <div className='close-btn'>
                            <button onClick={toggleWindow}>
                                <img src={closeIcon}></img>
                            </button>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='inputs'>
                            <div class="form-group">
                                <p>Name</p>
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                            </div>
                            <div class="form-group">
                                <p>Phone</p>
                                <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                            </div>
                            <button onClick={signUp}>Sign up</button>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='padding'></div>
                    <div className='content'>
                        <h2>НЕ ВЕРЬТЕ НА СЛОВО, УБЕДИТЕСЬ ЛИЧНО!</h2>
                        <h3>Посетите наши текущие объекты, пообщайтесь с клиентами и убедитесь в качестве услуг</h3>
                        <div className='btn-container'>
                            <button onClick={toggleWindow}>Записаться на экскурсию</button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}