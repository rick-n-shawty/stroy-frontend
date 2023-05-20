import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/swiper-bundle.min.css";

export default function PortfolioCard(){
    return(
        <div className="portfolio-card">
            <div className="image-container">
                <div className="main-image">
                    <Swiper
                        modules={[Navigation, Scrollbar, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation
                        scrollbar={{draggable: true}}
                        pagination={{clickable: true}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <img src="https://i.1.creatium.io/2f/c7/81/c7760104c5f97a2b99b2d52fb86be61d20/qJI3kPEa_zs.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D"></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='sub-images'>
                    <div>
                        <img src="https://i.1.creatium.io/2f/c7/81/c7760104c5f97a2b99b2d52fb86be61d20/qJI3kPEa_zs.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D"></img>
                    </div>
                    <div>
                        <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                    </div>
                    <div>
                        <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                    </div>
                    <div>
                        <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                    </div>
                </div>
            </div>

            <div className="text-container">
                <div className='texts'>
                    <h1>Title</h1>
                    <p>Капитальный ремонт 2х комнатной квартиры "под ключ". В данной квартире были проведены штукатурные работы, шпаклевание стен под покраску, окрашивание стен, укладка ламината, декоративные рейки и натяжные потолки.</p>
                </div>
                <div className="space">
                    <img src='https://i.1.creatium.io/22/07/3c/e94113b48cb2d19d16c41dffc469bffbba/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C.png'></img>
                    <p>Space</p>
                </div>
                <div className="price">
                    <img src='https://i.1.creatium.io/dd/4a/f3/293686d7fcc1515611fa433382450f20a7/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D1%80%D1%83%D0%B1%D0%BB%D1%8C.png'></img>
                    <p>Price</p>
                </div>
                <div className='btn-div'>
                    <button>Calculate price</button>
                </div>
            </div>
        </div>
    )
}