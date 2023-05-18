import React from 'react'; 
import {Link} from 'react-router-dom';
import {LanguageContext} from '../App';
import {useState, useContext} from 'react';
export default function Main(){
    const [rus, setRus] = useContext(LanguageContext)
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

                </div>
                <div className="bottom">
                    <div className="card">
                    Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                    </div>
                    <div className='card'>
                    Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                    </div>
                    <div className='card'>
                    Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                    </div>
                    <div className='card'>
                    Нарваться на неопытных мастеров, которые сделали ремонт у себя дома и теперь считают себя супер профессионалами. Обещают сделать "евро" ремонт недорого, но не имеют представления о СНиП, стандартах и делают всю работу с помощью молотка и отвертки
                    </div>
                </div>
            </section>

            <section className="certificate-section"></section>
            <section className="review-section"></section>
            <section className="team-section"></section>
            <section className="portfolio-section"></section>
            <section className="calc-section"></section>
        </main>
    )
}