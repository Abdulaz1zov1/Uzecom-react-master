import React from 'react';
import Slider from "react-slick";
import '../../style/home.scss'

function BrendCarusel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    };
    return (
        <div>
            <div className="container">
                <div className="carusel-brend">
                    <Slider {...settings}>
                        <div>
                            <div className="car-sec">
                                <img src="/img/zara.png" alt=""/>
                            </div>
                           <div className="text">
                               <p>Zara</p>
                           </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/zara.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/nike.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/penti.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/b-0.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/zara.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/b-1.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/b-1.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                        <div>
                            <div className="car-sec">
                                <img src="/img/b-1.png" alt=""/>
                            </div>
                            <div className="text">
                                <p>Zara</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="container">
                    <div className="home-h-theme">
                        <p>НОВАЯ КОЛЛЕКЦИЯ</p>
                    </div>
               <div className="brend-cards">
                   <div className="row">
                       <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                           <div className="card-bred">
                               <img className='img-fluid' src="/img/o-0.png" alt=""/>
                           </div>
                       </div>
                       <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                           <div className="card-bred">
                               <img className='img-fluid' src="/img/0-1.png" alt=""/>
                           </div>
                       </div>
                       <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                           <div className="card-bred">
                               <img className='img-fluid' src="/img/0-2.png" alt=""/>
                           </div>
                       </div>
                       <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                           <div className="card-bred">
                               <img className='img-fluid' src="/img/0-3.png" alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
                </div>
            </div>
        </div>
    );
}

export default BrendCarusel;