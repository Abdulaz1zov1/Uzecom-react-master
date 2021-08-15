import React from 'react';
import Slider from "react-slick";
import '../../style/home.scss'
function ProductGame(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6 col-sm-6 col-lg-3">
                        <div className="product-car">
                            <Slider {...settings}>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-1.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-2.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-3.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-4.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-sm-6 col-lg-3">
                        <div className="product-car">
                            <Slider {...settings}>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-1.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-2.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-3.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-4.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-sm-6 col-lg-3">
                        <div className="product-car">
                            <Slider {...settings}>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-1.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-2.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-3.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-4.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-sm-6 col-lg-3">
                        <div className="product-car">
                            <Slider {...settings}>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-1.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-2.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-3.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="car-sec-1">
                                        <img src="/img/k-4.png" alt=""/>
                                        <div className="title">
                                            ZARA
                                        </div>
                                        <div className="text">
                                            Рубашка с контрастным дизайном
                                        </div>
                                        <div className="number">
                                            100 000 cум
                                        </div>
                                        <img className='p-img' src="/img/color.png" alt=""/>
                                        <div className="p-button">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductGame;