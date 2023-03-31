import React from 'react';
import img1 from '../../../assets/img/slider/00-d75e58217a.jpg'
import img2 from '../../../assets/img/slider/000-cbc4b80d15.jpg'
import img3 from '../../../assets/img/slider/0000-ddbfbba721.jpg'
import img4 from '../../../assets/img/slider/00000-9e0ff6fcc4.jpg'
import img5 from '../../../assets/img/slider/000000-aeb475886b.jpg'
import img6 from '../../../assets/img/slider/1-483018593e.jpg'
import img7 from '../../../assets/img/slider/2-4fc20c347c.jpg'
import img8 from '../../../assets/img/slider/3-f68ff47228.jpg'
import img9 from '../../../assets/img/slider/4-578e2ca9ce.jpg'
import img10 from '../../../assets/img/slider/5-4de9253e3e.jpg'
import img11 from '../../../assets/img/slider/6-7629c511a0.jpg'
import img12 from '../../../assets/img/slider/8-65e7554933.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img src={img7} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img src={img8} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide9" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide9" className="carousel-item relative w-full">
                    <img src={img9} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide8" className="btn btn-circle">❮</a>
                        <a href="#slide10" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide10" className="carousel-item relative w-full">
                    <img src={img10} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide9" className="btn btn-circle">❮</a>
                        <a href="#slide11" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide11" className="carousel-item relative w-full">
                    <img src={img11} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide10" className="btn btn-circle">❮</a>
                        <a href="#slide12" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide12" className="carousel-item relative w-full">
                    <img src={img12} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide11" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;