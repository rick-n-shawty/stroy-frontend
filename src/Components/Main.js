import React from 'react'; 
import {Link} from 'react-router-dom';
import {LanguageContext} from '../App';
import {useState, useEffect, useContext} from 'react';
import EmployeeCard from './EmployeeCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import closeIcon from '../Images/close-icon.svg'


import {Swiper, useSwiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
                    height="100%"
                    src={item.url}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullscreen></iframe>
                })
                const workerRes = await axios.get('/employee')
                const workersArr = await workerRes.data.employees
                console.log(workersArr)
                const workerCards = workersArr.map(item => {
                    return <EmployeeCard 
                    key={item._id} 
                    name={item.name} 
                    positionRu={item.positionRu}
                    positionUz={item.positionUz}
                    picture={item.picture}
                    exp={item.experience}
                    descRu={item.descriptionRu}
                    descUz = {item.descriptionUz}
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
    const navigate = useNavigate()
    return (
        <main className="main-section">
            <section className="banner-section">
                <div className='bg-image'>
                    <div className='top'>                     
                        <div className='h1-div'>{rus ? <span>Мы предоставляем {<span className='partial-color'>качественные и доступные</span>} услуги по ремонту вашей квартиры в Ташкенте.</span>: 
                        <span>Тошкент шаҳрида Сизниг квартирангизни {<span className='partial-color'>сифатли ва хамёнбоб</span>} таъмирлаш ҳизматларини амалга оширамиз. </span>}</div>
                        <div className='h2-div'>{rus ? <span>На сегодняшний день у нас работает профессиональная команда с 3-х летним опытом, сдавшая более <span className='partial-color'>100 объектов</span> их владельцам. Вы можете доверять нам!</span>: 
                        <span>Бугунги кунга келиб <span className='partial-color'>100 дан ортиқ объектларни</span> ўз эгаларига топшириб, 3 йиллик тажрибага эга профессионал командага эгамиз. Бизга ишонсангиз бўлади!</span>}</div>
                    </div>
                    <div className="perk-list">
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wallet_Flat_Icon.svg/1024px-Wallet_Flat_Icon.svg.png?20180301073008'></img>
                            <div className='text'>
                                <h3>{rus ? " Без продоплат" : "Бошланғич туловларсиз"}</h3>
                                <p>{rus ? "Оплачивайте работу только после выполнения и проверки качества" : "Ишни амалга оширилганлиги учун хақни, иш тугаллангандан ва текширилгандан сўнг туланади "}</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/2048px-Circle-icons-document.svg.png"></img>
                            <div className='text'>
                                <h3>{rus ? "ГАРАНТИЯ 100%": "100% Кафолат"}</h3>
                                <p>
                                    {rus ? "Фиксированная смета и официальный договор с гарантией в 1 год": "Смета бўйича келишилган нарх ва расмий шартнома орқали 1 йил кафалат"}
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.pngrepo.com/png/191856/512/alarm-clock-clock.png"></img>
                            <div className='text'>
                                <h3>{rus? "ТОЧНО В СРОК": "Режа асосида ишни ўз вақтида топширамиз"}</h3>
                                <p>{rus ? "Держим сроки или платим неустойку каждый день просрочки" : "Белгиланган муддатда ишни ўз эгасига топширамиз, кечиктирилган вақт иш учун жарима тулаймиз"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="calc-link">
                        <button onClick={(e) => navigate('/calc')}>Find out price</button>
                    </div>
                </div>
            </section>

            <section className="risk-section">
                <div className="top">
                    <h1>{rus ? "C ЧЕМ ВЫ МОЖЕТЕ СТОЛКНУТЬСЯ ПРИ ЗАКАЗЕ  РЕМОНТА КВАРТИРЫ?": "Квартирангизни таъмирлашга буюртма бераетганингизда бугунда ыуйидаги мусала ва муаммолар билан дуч келишингиз мумкин."}</h1>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>{rus ? "КРИВЫЕ РУКИ" : "Профессионал бўлмаган усталарга"}</h3>
                        </div>
                        <p>
                            {rus ?
                             "Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать 'евро' ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки": 
                             "Ўз уйида ремонтни амалга ошириб ўзини мутаххасис деб уйлаган усталарга дуч келишингиз мумкин. Одатда бундай гуруҳлар “евро ремонт” қилиб беришни ваъда қилишади, аммо таъмирлаш нормалари ва стандартларини билишмайди"
                            }
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>{rus? "МОШЕННИКИ": "Фирибгарлар"}</h3>
                        </div>
                        <p>
                            {rus ?
                             "Которые нальют в уши 'мёда', а после того как получат аванс выключают телефон и пропадают. Либо кормят завтраками и говорят, что скоро все сделают и просят еще денег на непредвиденные расходы. А договора конечно нет или он оформлен на несуществующую компанию" : 
                             "Буюртмачини чиройли сўлар билан алдаб, бошланғич иш хақини олиб, йўқ булиб қолишади. Бўлмаса маълум бир ишни олиб буюртмачини эртанги кунлар билан алдаб, смета ёки бошқа хужжатларда кўрсатилмаган харажатларни талаб қилишади. Бундайлар одатда хеч қандай шартномаларсиз ишни амалга оширишади"
                            }
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>{rus ? "УВЕЛИЧЕНИЕ СМЕТЫ":  "Сметани ошиши"}</h3>
                        </div>
                        <p>
                            {rus? 
                            "Некоторые недобросовестные отделочники специально занижают стоимость и не включают некоторые виды работ чтобы получить заказ, а уже в процессе всплывает “мы об этом не договаривались”, “забыли посчитать”, “не увидели” а Вам ничего не останется как “платить и плакать”" :
                            "Баъзи бир виждонсиз усталар буюртмачидан буюртмани олиш мақсадида нархларни арзон кўрсатиб, иш жараёнида кутилмаган харажатларни буюртмачига тақдим қилишади"}
                        </p>
                    </div>
                    <div className="card">
                        <div className='notch'>
                            <img src='https://i.1.creatium.io/51/01/da/ec19a4027b7aec95c47cdcc53eb2aca183/%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA.png'></img>
                            <h3>{rus ? "НАРУШЕНИЕ СРОКОВ": "Муддатларга риоя қилмаслик"}</h3>
                        </div>
                        <p>
                            {rus ? 
                            "Сначала обещают сделать ремонт за 30 дней, но это только на словах и ни какой ответственности в договоре. Мастера приходят когда удобно, устраивают перекур каждые 10 минут, не выходят на работу, оправдываясь что 'кошка заболела'. И в итоге Ваш ремонт длится пол года": 
                            "Баъзи бир таъмирлаш гурухлари таъмирлаш учун аниқ вақтни айтиб, шу вақт ичида ишни бажара олишмайди, ишга чиқишмайди ва буюртмачининг 1 ойлик ремонти 6 ойга чузилади."}
                        </p>
                    </div>
                </div>
            </section>
            <section className="review-section">
                <div className='bg-image'> 
                    <div className='top'>
                        <h1>{rus ? "РЕАЛЬНЫЕ ОТЗЫВЫ" : "Буюртмачиларимиз биз тўғримизда"}</h1>
                        <h2>{rus ? "ДОВОЛЬНЫЕ КЛИЕНТЫ ЭТО ЛУЧШЕЕ ПОДТВЕРЖДЕНИЕ КАЧЕСТВА НАШИХ УСЛУГ" : "Ишимиздан мамнун мижозлар, бизнинг эртанги кунга ишончимиздир"}</h2>
                    </div>
                    <div className='bottom'>
                        {videos}
                    </div>
                </div>
            </section>
            <section className="certificate-section">
                <div className='top'>
                    <h1>{rus ? "С Нами безопастно" : "Бизни танлашнинг афзалликлари"}</h1>
                </div>
                <div className='bottom'>
                    <img className='certificate-img' src='https://i.1.creatium.io/98/be/36/096c7c193aefc6dc115c89602720372e18/480x480q8/01dogovor_svidetelstvo555.png'></img>
                    <div className='text-cards'>
                        <div className='card'>
                            <div className='notch'>
                                <img src='https://i.1.creatium.io/97/2e/6a/5bfaddff57b8bcc32c53068ab2e0c135de/35x35q8/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8E%D1%81.png'></img>
                                <h3>{rus? "Работаем официально": "Расмий ишлаймиз"}</h3>
                            </div>
                            <p>
                                {rus ? 
                                "Зарегистрированы как ООО, платим налоги и предоставляем необходимые закрывающие документы, акты, чеки": 
                                "Корхонамиз ЯТТ сифатида давлат руйҳатидан ўтган, барча акт ва чекларни тақдим этамиз"}
                            </p>
                        </div>
                        <div className='card'>
                            <div className='notch'>
                                <img src='https://i.1.creatium.io/97/2e/6a/5bfaddff57b8bcc32c53068ab2e0c135de/35x35q8/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8E%D1%81.png'></img>
                                <h3>{rus ? "Оформляем договор": "Шартнома асосида ишлаймиз"}</h3>
                            </div>
                            <p>{rus ? 
                            "Выполняем работы строго по договору в котором прописаны все условия, обязанности и ответственность": 
                            "Барча ишларни шартнома асосида бажарамиз"}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section">  
                <div className='top'>
                    <h1>{rus ? `КТО БУДЕТ ДЕЛАТЬ РЕМОНТ?`: "Таъмирлаш ишларини кимлар олиб боради?"}</h1>
                    <h2>{rus ? 
                    "Только проверенные, адекватные специалисты с реальным опытом и профессиональным инструментом. Всегда трезвые, соблюдают дисциплину и аккуратно относятся к вашему имуществу": 
                    "Фақатгина куп йиллик тажрибаси ва профессионал, ўз ишини билган усталар амалга оширишади."}</h2>
                </div>
                <div className='bottom'>
                    {workers}
                </div>
            </section>

            <section className="portfolio-section">
                <div className='top'>
                    <h1>{rus ? "НЕКОТОРЫЕ НАШИ РАБОТЫ": "BIZNING BA'ZI ISHLARIMIZ"}</h1>
                    <h2>{rus ? 
                    "ВСЕ ФОТОГРАФИИ 100% НАШИ РАБОТЫ, А НЕ СКАЧАННЫЕ С ИНТЕРНЕТА": 
                    "HAMMA RASMLAR 100% BIZNING ISHLARIMIZ"}</h2>
                </div>


                <div className='bottom'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
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
                    <h1>{rus ? "ПРИМЕРНЫЙ РАСЧЁТ СТОИМОСТИ РЕМОНТА": "Таъмирлаш харажатларининг таҳминий ҳисоб китоби"}</h1>
                </div>
                <div className='bottom'>
                    <div className='container'>
                        <div className='input-box'>
                            <h3>Площадь квартиры, м2</h3>
                            <input placeholder='50' type='number'/>
                        </div>
                        <div className='check-boxes'>
                            <div className='condition'>
                                <h3>{rus? "Состояние квартиры": "Таъмирлаш квартира ҳоласи"}</h3>
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    {rus? "Вторичка со старым ремонтом" : "Иккиламчи уч (эски таъмир билан"}
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Новостройка с черновой отделкой" : "Янги қурилган уй (0 дан)"}
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Новостройка с чистовой отделкой" : "Янги қурилган уй (тоза отделка ишлари)"}
                                </label>   
                                <label class="radio-container">
                                    <input type="radio" name="radio-cond"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Новостройка без отделки" : "Янги қурилган уй (отделкасиз)"}
                                </label>   
                            </div>
                            <div className='type'>
                                <h3>{rus ? "Тип ремонта" : "Таъмирлаш типы"}</h3>
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Черновая отделка" : "Қора ишлар"}
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Косметический ремонт" : "Косметик таъмирлаш"}
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Капитальный ремонт" : "Капитал таъмирлаш"}
                                </label>                
                                <label class="radio-container">
                                    <input type="radio" name="radio-type"/>
                                    <span class="checkmark"></span>
                                    {rus ? "Капитальный по дизайн проекту" : "Капитпл таъмирлаш проект асосида"}
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
                            <button onClick={(e)=> navigate('/calc')}>Расчитать по подробнее</button>
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