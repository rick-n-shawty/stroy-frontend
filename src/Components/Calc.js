import {LanguageContext} from '../App';
import { useContext, useState } from 'react';
import axios from 'axios';
export default function Calc(){
    return (
        <main className="main-calc-section">
            <section>
                <div className="text-container">
                    <h1>
                        УЗНАЙТЕ УЖЕ ЧЕРЕЗ 30 МИНУТ CТОИМОСТЬ И СРОКИ РЕМОНТА ВАШЕЙ КВАРТИРЫ "ПОД КЛЮЧ" В САНКТ-ПЕТЕРБУРГЕ С ТОЧНОСТЬЮ 90% 
                    </h1>
                </div>
                <div className='calculator'>
                    <div className='option one'>
                        <p>
                            <strong>1. Укажите общую площадь квартиры по полу</strong>
                        </p>
                        <input type='number'/>
                    </div>
                    <div className='option two'>
                        <p>
                            <strong>2. Выберите тип ремонта</strong>
                        </p>
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
                    <div className='option three'>
                        <p><strong>3. Какое состояние квартиры?</strong></p>
                        <label class="radio-container">
                            <input type="radio" name="radio-cond"/>
                            <span class="checkmark"></span>
                            Черновая отделка
                        </label> 
                        <label class="radio-container">
                            <input type="radio" name="radio-cond"/>
                            <span class="checkmark"></span>
                            Черновая отделка
                        </label> 
                        <label class="radio-container">
                            <input type="radio" name="radio-cond"/>
                            <span class="checkmark"></span>
                            Черновая отделка
                        </label> 
                        <label class="radio-container">
                            <input type="radio" name="radio-cond"/>
                            <span class="checkmark"></span>
                            Черновая отделка
                        </label> 
                    </div>
                    <div className='option four five'>
                        <div className='four'>
                            <p><strong>4. Количество комнат</strong></p>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className='five'>
                            <p><strong>5. Санузел</strong></p>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className='option six'>
                        <p>
                            <strong>6. Электромонтажные работы</strong>
                        </p>
                        <div>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </div>
                    </div>
                    <div className='option seven'> 
                        <p>
                            <strong>7. Сантехнические работы</strong>
                        </p>
                        <div>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </div>
                    </div>
                    <div className='option eight'>
                        <p>
                            <strong>8. Дополнительные работы</strong>
                        </p>
                        <div>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}