import React, {useState,useContext} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import Slider from "react-slick";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {StoreContext} from '../Store'
import { toast } from 'react-toastify';
const PageHeader = () => {
    const state = useContext(StoreContext);
    const [cart, setCart] = state.cart;
    const [products, setProducts]=state.products
    const addCart = (data) => {
        setCart([...cart, data]);

        toast.success("Muvaqqaqiyatli qo'shildi");

    };

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
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
    const [modal, setModal] = useState(false)

    function modalToggle() {
        setModal(true)
    }

    function toggle() {
        setIsOpen(!isOpen)
        isOpen ? document.querySelector('.button-coll').style.color = ' black'
            : document.querySelector('.button-coll').style.color = '#FE9E0D'
    }

    function toggle1() {
        setIsOpen1(!isOpen1)
        isOpen1 ? document.querySelector('.button-coll2').style.color = 'black'
            : document.querySelector('.button-coll2').style.color = '#FE9E0D'
    }

    function toggle2() {
        setIsOpen2(!isOpen2)
        isOpen2 ? document.querySelector('.button-coll1').style.color = 'black'
            : document.querySelector('.button-coll1').style.color = '#FE9E0D'
    }

    function toggle3() {
        setIsOpen3(!isOpen3)
        isOpen3 ? document.querySelector('.button-coll4').style.color = ' black'
            : document.querySelector('.button-coll4').style.color = '#FE9E0D'
    }

    function chiq() {
        setModal(false)
    }


    return (
        <div className='mb-5'>
            <div className="new-img">
                <div className="container">
                    <div className="back-title">
                        NEW STYLE
                    </div>
                    <p>uzecom.com</p>
                </div>
            </div>
            <div className="container">
                <div className="home-h-theme1">
                    <p>РУБАШКИ</p>
                    <div className="ff">
                        <div onClick={modalToggle} className="filtr">
                            <img src="/img/filtr.png" alt=""/>
                            <p> Фильтр</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-lg-3 col-sm-12 col-0 ">
                        <div className="new-P">
                            <div className="p-header">
                                <input type="text" placeholder='Search  ... '/>
                                <div className="img-s">
                                    <img src="/img/se.png" alt=""/>
                                </div>
                            </div>
                            <button className='button-coll' onClick={toggle}>Сортиковка по
                                {
                                    isOpen ? <img src="/img/n-1.png" alt=""/> :
                                        <img src="/img/n-0.png" alt=""/>
                                }
                            </button>
                            <div className="collapse-P">
                                <Collapse isOpen={isOpen}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                - Рубашки
                                            </div>
                                            <div className="footer-section1">
                                                - Свитшоты
                                            </div>
                                            <div className="footer-section1">
                                                -Джинсы
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <button className='button-coll2' onClick={toggle1}>Для мужшин
                                {
                                    isOpen1 ? <img src="/img/n-1.png" alt=""/> :
                                        <img src="/img/n-0.png" alt=""/>
                                }
                            </button>
                            <div className="collapse-P">
                                <Collapse isOpen={isOpen1}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                - Рубашки
                                            </div>
                                            <div className="footer-section1">
                                                - Свитшоты
                                            </div>
                                            <div className="footer-section1">
                                                -Джинсы
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <button className='button-coll1' onClick={toggle2}>Для женшин
                                {
                                    isOpen2 ? <img src="/img/n-1.png" alt=""/> :
                                        <img src="/img/n-0.png" alt=""/>
                                }
                            </button>
                            <div className="collapse-P">
                                <Collapse isOpen={isOpen2}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                - Рубашки
                                            </div>
                                            <div className="footer-section1">
                                                - Свитшоты
                                            </div>
                                            <div className="footer-section1">
                                                -Джинсы
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <button className='button-coll4' onClick={toggle3}>Для детей
                                {
                                    isOpen3 ? <img src="/img/n-1.png" alt=""/> :
                                        <img src="/img/n-0.png" alt=""/>
                                }
                            </button>
                            <div className="collapse-P">
                                <Collapse isOpen={isOpen3}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                - Рубашки
                                            </div>
                                            <div className="footer-section1">
                                                - Свитшоты
                                            </div>
                                            <div className="footer-section1">
                                                -Джинсы
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <div className="text-title">
                                Филтр по размером.
                            </div>
                            <div className="chiz"></div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">XS</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">S</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">L</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">M</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">XL</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">XXL</div>
                            </div>
                            <div className="text-title">
                                Диапазон цена
                            </div>
                            <div className="chiz"></div>
                            <div className="img-b">
                                <img src="/img/ran.png" alt=""/>
                            </div>
                            <div className="text-title">
                                Филтр по брендам.
                            </div>
                            <div className="chiz"></div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">Zara</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">Legendr</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">ABB</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">Navigator</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">TELFOR</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">Wago</div>
                            </div>
                            <div className="check">
                                <input type="checkbox"/>
                                <div className="text">UniVersal</div>
                            </div>
                            <div className="button-end1">
                                <div className="button-left">
                                    Сбросить
                                </div>
                                <div className="button-right">
                                    Фильтр
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-sm-12  col-12">
                        <div className="row ">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-5">
                                <div className="product-car">
                                    <Slider {...settings}>
                                        {
                                            products.map((item)=>(
                                                <div>
                                                    <div className="car-sec-1">
                                                        <img src={item.url} alt=""/>
                                                        <div className="title">
                                                            {item.title}
                                                        </div>
                                                        <div className="text">
                                                            {item.text}
                                                        </div>
                                                        <div className="number">
                                                            {item.solary}
                                                        </div>
                                                        <img className='p-img' src="/img/color.png" alt=""/>
                                                        <div onClick={()=>addCart(item)} className="p-button">
                                                            Добавить в корзину
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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
                <div className="row">
                    <div className="col-md-12">
                        <Modal isOpen={modal} toggle={modalToggle}>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                                    <div className="new-P">
                                        <div className="p-header">
                                            <input type="text" placeholder='Search  ... '/>
                                            <div className="img-s">
                                                <img src="/img/se.png" alt=""/>
                                            </div>
                                        </div>
                                        <button className='button-coll' onClick={toggle}>Сортиковка по
                                            {
                                                isOpen ? <img src="/img/n-1.png" alt=""/> :
                                                    <img src="/img/n-0.png" alt=""/>
                                            }
                                        </button>
                                        <div className="collapse-P">
                                            <Collapse isOpen={isOpen}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="footer-section1">
                                                            - Рубашки
                                                        </div>
                                                        <div className="footer-section1">
                                                            - Свитшоты
                                                        </div>
                                                        <div className="footer-section1">
                                                            -Джинсы
                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                        <button className='button-coll2' onClick={toggle1}>Для мужшин
                                            {
                                                isOpen1 ? <img src="/img/n-1.png" alt=""/> :
                                                    <img src="/img/n-0.png" alt=""/>
                                            }
                                        </button>
                                        <div className="collapse-P">
                                            <Collapse isOpen={isOpen1}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="footer-section1">
                                                            - Рубашки
                                                        </div>
                                                        <div className="footer-section1">
                                                            - Свитшоты
                                                        </div>
                                                        <div className="footer-section1">
                                                            -Джинсы
                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                        <button className='button-coll1' onClick={toggle2}>Для женшин
                                            {
                                                isOpen2 ? <img src="/img/n-1.png" alt=""/> :
                                                    <img src="/img/n-0.png" alt=""/>
                                            }
                                        </button>
                                        <div className="collapse-P">
                                            <Collapse isOpen={isOpen2}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="footer-section1">
                                                            - Рубашки
                                                        </div>
                                                        <div className="footer-section1">
                                                            - Свитшоты
                                                        </div>
                                                        <div className="footer-section1">
                                                            -Джинсы
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                        <button className='button-coll4' onClick={toggle3}>Для детей
                                            {
                                                isOpen3 ? <img src="/img/n-1.png" alt=""/> :
                                                    <img src="/img/n-0.png" alt=""/>
                                            }
                                        </button>
                                        <div className="collapse-P">
                                            <Collapse isOpen={isOpen3}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="footer-section1">
                                                            - Рубашки
                                                        </div>
                                                        <div className="footer-section1">
                                                            - Свитшоты
                                                        </div>
                                                        <div className="footer-section1">
                                                            -Джинсы
                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                        <div className="text-title">
                                            Филтр по размером.
                                        </div>
                                        <div className="chiz"></div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">XS</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">S</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">L</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">M</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">XL</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">XXL</div>
                                        </div>
                                        <div className="text-title">
                                            Диапазон цена
                                        </div>
                                        <div className="chiz"></div>
                                        <div className="img-b">
                                            <img src="/img/ran.png" alt=""/>
                                        </div>
                                        <div className="text-title">
                                            Филтр по брендам.
                                        </div>
                                        <div className="chiz"></div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">Zara</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">Legendr</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">ABB</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">Navigator</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">TELFOR</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">Wago</div>
                                        </div>
                                        <div className="check">
                                            <input type="checkbox"/>
                                            <div className="text">UniVersal</div>
                                        </div>
                                        <div onClick={chiq} className="button-end1">
                                            <div className="button-left">
                                                Сбросить
                                            </div>
                                            <div className="button-right">
                                                Фильтр
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;