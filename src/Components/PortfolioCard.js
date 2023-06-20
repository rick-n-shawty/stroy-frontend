import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { LanguageContext } from '../App';
import "swiper/swiper-bundle.min.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
export default function PortfolioCard({pictures, price, space, titleRu, titleUz, descRu, descUz}){
    const navigate = useNavigate()
    const [imageSlides, setImageSlides] = useState([])
    const [imageStatic, setImageStatic] = useState([])
    const [rus, setRus] = useContext(LanguageContext)
    useEffect(() => {
        const imagesArrSlides = pictures.map(item => {
            return <SwiperSlide>
                <img src={item} key={item}></img>
            </SwiperSlide>
        })
        const imagesArrStatic = pictures.map(item => {
            return <div>
                <img src={item} key={item}></img>
            </div> 
        })
        setImageSlides(imagesArrSlides)
        setImageStatic(imagesArrStatic)
    }, [])
    return(
        <div className="portfolio-card">
            <div className="image-container">
                <div className="main-image">
                    <Swiper
                        modules={[Navigation, Scrollbar, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        scrollbar={{draggable: true}}
                        pagination={{clickable: true}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                            {imageSlides}
                    </Swiper>
                </div>
                <div className='sub-images'>
                    {imageStatic}
                </div>
            </div>

            <div className="text-container">
                <div className='texts'>
                    <h1>{rus ? titleRu : titleUz}</h1>
                    <p>{rus ? descRu : descUz}</p>
                </div>
                <div className="space">
                    <img src='https://i.1.creatium.io/22/07/3c/e94113b48cb2d19d16c41dffc469bffbba/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C.png'></img>
                    <p>Space {space}</p>
                </div>
                <div className="price">
                    <img src='https://i.1.creatium.io/dd/4a/f3/293686d7fcc1515611fa433382450f20a7/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D1%80%D1%83%D0%B1%D0%BB%D1%8C.png'></img>
                    <p>Price {price}</p>
                </div>
                <div className='btn-div'>
                    <button onClick={(e) => navigate('/calc')}>Calculate price</button>
                </div>
            </div>
        </div>
    )
}