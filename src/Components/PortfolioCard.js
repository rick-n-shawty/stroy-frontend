import {Swiper, useSwiper, SwiperSlide} from 'swiper/react';
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
                    <img src="https://i.1.creatium.io/2f/c7/81/c7760104c5f97a2b99b2d52fb86be61d20/qJI3kPEa_zs.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D"></img>
                    <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                    <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                    <img src='https://i.1.creatium.io/d8/28/87/f5b3e8a689fe4d08f05dd0b7ce26849103/z5TC-Q--haI.jpg#%7B%22size%22:%5B1280,855%5D,%22quality%22:8%7D'></img>
                </div>
            </div>

            <div className="text-container">
                <h1>Title</h1>
                <p>Description dajkdhkajhdkjhadjkhkajdhkahjd</p>
                <div className="space">
                    <img></img>
                    <p>Space</p>
                </div>
                <div className="price">
                    <img></img>
                    <p>Price</p>
                </div>
                <button>Calculate price</button>
            </div>
        </div>
    )
}