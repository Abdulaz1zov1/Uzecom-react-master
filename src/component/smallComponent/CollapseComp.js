import React, {useState} from 'react';
import '../../style/collapse.scss'
import classnames from 'classnames';
import '../../style/home.scss'
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col} from 'reactstrap';
import Slider from "react-slick";

function CollapseComp(props) {
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
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className='mb-5'>
            <div className="new-img1">

            </div>
            <div className="container">
                <div className="home-h-theme">
                    <p>БАЗОВАЯ РУБАШКА</p>
                </div>
                <div className="row ">
                    <div className="col-md-12 col-lg-5 col-12 col-sm-12">
                        <div className="row ">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                                <Nav tabs>
                                    <div className="row ">
                                        <div className="col-md-12 col-lg-12 col-3 col-sm-3 ">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({active: activeTab === '1'})}
                                                    onClick={() => {
                                                        toggle('1');
                                                    }}
                                                >
                                                    <div className="last">
                                                        <img src="/img/k-5.png" alt=""/>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-3 col-sm-3">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({active: activeTab === '2'})}
                                                    onClick={() => {
                                                        toggle('2');
                                                    }}
                                                >
                                                    <div className="last">
                                                        <img src="/img/k-6.png" alt=""/>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-3 col-sm-3 ">
                                            <NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: activeTab === '3'})}
                                                        onClick={() => {
                                                            toggle('3');
                                                        }}
                                                    >
                                                        <div className="last">
                                                            <img src="/img/k-3.png" alt=""/>
                                                        </div>
                                                    </NavLink>
                                                </NavItem>
                                            </NavItem>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-3 col-sm-3 ">
                                            <NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: activeTab === '4'})}
                                                        onClick={() => {
                                                            toggle('4');
                                                        }}
                                                    >
                                                        <div className="last">
                                                            <img src="/img/k-4.png" alt=""/>
                                                        </div>
                                                    </NavLink>
                                                </NavItem>
                                            </NavItem>
                                        </div>
                                    </div>
                                </Nav>
                            </div>
                            <div className="col-lg-9 col-md-9 col-12 col-sm-12 m-0">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <div className="img-content">
                                            <img src="/img/k-5.png" alt=""/>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div className="img-content">
                                            <img src="/img/k-6.png" alt=""/>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">

                                        <div className="img-content">
                                            <img src="/img/k-3.png" alt=""/>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4">

                                        <div className="img-content">
                                            <img src="/img/k-4.png" alt=""/>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-12 col-sm-12">
                        <div className="P-left">
                            <div className="item-text">
                                ZARA РУБАШКА
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="item-he">
                                        <div className="text">SKU:</div>
                                        <p>685813</p>
                                    </div>
                                    <div className="item-he">
                                        <div className="text">Посадка:</div>
                                        <p>высокая посадка</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="item-he">
                                        <div className="text">Крой:</div>
                                        <p>средняя посадка</p>
                                    </div>
                                    <div className="item-he">
                                        <div className="text">Состав:</div>
                                        <p>100% хлопок</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chiz"></div>
                        <div className="text-p">
                            Рубашка с контрастным дизайном Свитшот из мягкого футера. Довольно свободная модель с
                            заниженной линией плеча. Рельефная трикотажная резинка по горловине, низу рукавов и нижнему
                            краю.
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                                <div className="button-solary">
                                    <div className="solary">
                                        Цена:
                                    </div>
                                    <p> 100 000 cум </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                                <div className="pl">
                                    <p>Количество:</p>
                                    <div className="tab-sec-1">
                                        <div  className="inc-0">
                                            -
                                        </div>
                                        <div className="inc-1">
                                            3 шт
                                        </div>
                                        <div  className="inc-2">
                                            +
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="color">
                            Цвет: Синий
                        </div>
                        <img src="/img/color.png" alt=""/>
                        <div className="color">
                            Размер: XXL
                        </div>
                        <form action="">
                        <div className="input-form-p">

                                <input name='na' type="radio"/>
                                <p>XS</p>
                            <input name='na' type="radio"/>
                            <p>S</p>
                            <input name='na' type="radio"/>
                            <p>XXL</p>
                            <input name='na' type="radio"/>
                            <p>AV</p>
                            <input name='na' type="radio"/>
                            <p>M</p>
                            <input name='na' type="radio"/>
                            <p>N</p>

                        </div>
                        </form>
                        <div className="button-end">
                            КУПИТЬ
                        </div>
                    </div>
                </div>
                <div className="home-h-theme">
                    <p>ПОХОЖИ ТОВАРЫ</p>
                </div>
               <diw className="row">
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
               </diw>
            </div>
        </div>
    );
}

export default CollapseComp;