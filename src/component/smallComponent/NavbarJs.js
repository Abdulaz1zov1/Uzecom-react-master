import React, {useState,useContext} from 'react';

import '../../style/navbar.scss'
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,

    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {StoreContext} from '../Store'
import SinUpModal from "./SinUpModal";
function NavbarJs(props) {
    const state = useContext(StoreContext);
    const [pul, setPul] = useState(false)
    const [amal, setAmal] = useState(1)
    const [map, setMap] = useState([
        {
            id: 1,
            url: "/img/x-0.png",
            title1: 'ZARA рубашка',
            title2: 'Рубашка с контрастным дизайном',
            amal: 1,
            solary: 100000,
            raz: 'XXL'
        },
        {
            id: 2,
            url: "/img/x-0.png",
            title1: 'ZARA рубашка',
            title2: 'Рубашка с контрастным дизайном',
            amal: 1,
            solary: 120000,
            raz: 'X'
        },
        {
            id: 3,
            url: "/img/x-0.png",
            title1: 'ZARA рубашка',
            title2: 'Рубашка с контрастным дизайном',
            amal: 1,
            solary: 90000,
            raz: 'S'
        },
        {
            id: 4,
            url: "/img/x-0.png",
            title1: 'ZARA рубашка',
            title2: 'Рубашка с контрастным дизайном',
            amal: 1,
            solary: 130000,
            raz: 'XL'
        },
    ])
    const sum = map.map((item) => item.amal * item.solary).reduce((a, c) => a + c);

    function wer(id) {
        setPul(!pul)
        const product = map.find((item) => item.id === id);
        const index = map.findIndex((item) => item.id === id)
        if (product.amal > 0) {
            product.amal -= 1;
        }

        const cart2 = map;
        cart2.splice(index, 1, product)
        setAmal(cart2)
    }

    function wera(id) {
        setPul(!pul)
        const product = map.find((item) => item.id === id);
        const index = map.findIndex((item) => item.id === id)
        product.amal += 1;
        const cart2 = map;
        cart2.splice(index, 1, product)
        setAmal(cart2)
    }

    function kes(id) {
        setPul(!pul)
        const cart2 = map
        const index = map.findIndex((item) => item.id === id)
        cart2.splice(index, 1)
        let a = [...cart2]
        setAmal(a)

    }

    const [isOpen, setIsOpen] = useState(false);
    const [search, setsearch] = useState(false)

    function toggler() {
        setsearch(!search)
    }

    const toggle = () => setIsOpen(!isOpen);
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    function modalFunc() {
        setModal(!modal)
    }

    function modalFunc1() {
        setModal1(!modal1)
    }

    return (
        <div>
            <Navbar light expand="lg">

                <div className="container">
                    <NavbarToggler onClick={toggle}>
                        <div className="menu-h">
                            <img src="/img/ga.png" alt=""/>
                        </div>
                    </NavbarToggler>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    ДЛЯ МУЖЧИН
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink to='/check'>
                                            Product 1
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/new'>
                                            Product 2
                                        </NavLink>

                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/about'>
                                            Product 3
                                        </NavLink>

                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='solary'>
                                            Product 4
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    ДЛЯ ЖЕНЩИН
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink to='/myproduct'>
                                            Product 1
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/collapse'>
                                            Product 2
                                        </NavLink>

                                    </DropdownItem>
                                    <DropdownItem>
                                        Product 3
                                    </DropdownItem>
                                    <DropdownItem>
                                        Product 4
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    ДЛЯ ДЕТЕЙ
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <div className="input-g-1">
                                <input placeholder='Поиск' type="text"/>
                                <div className="sea">
                                    <img src="/img/qq.png" alt=""/>
                                </div>
                            </div>
                        </Nav>

                    </Collapse>
                    <NavLink to='/'>
                        <NavbarBrand className="mr-5">
                            <img src="/img/1.1.1.png" alt=""/>
                        </NavbarBrand>
                    </NavLink>
                    <NavLink to='/'>
                        <div className="brend-h">
                            <img src="/img/12.png" alt=""/>
                        </div>
                    </NavLink>

                    <div className="menu">
                        <ul className="d-flex ulli">
                            {
                                search ? <div className="input-g">
                                        <input placeholder='Поиск' type="text"/>
                                        <div className="sea">
                                            <img src="/img/qq.png" alt=""/>
                                        </div>
                                    </div>
                                    : ''
                            }
                            <li onClick={toggler} className='fff'>
                                <img src="/img/sea.png" alt=""/>
                            </li>
                            <li onClick={modalFunc} className='fff'>
                                <img src="/img/ko.png" alt=""/>
                            </li>
                            <li onClick={modalFunc1} className='fff'>
                                <img src="/img/us.png" alt=""/>
                            </li>
                            <li onClick={modalFunc} className='fff1'>
                                <img src="/img/usi.png" alt=""/>
                            </li>
                            <li onClick={modalFunc1} className='fff1'>
                                <img src="/img/uss.png" alt=""/>
                            </li>
                            <li>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <img src="/img/RU.png" alt=""/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <img src="/img/UZ.png" alt=""/>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
            <div className="row p-0">
                <div className="col-md-12 col-12 col-lg-12 col-sm-12 p-0">
                    <Modal isOpen={modal} toggle={modalFunc}>
                        <div onClick={modalFunc} className="pod">
                            <img src="/img/xx.png" alt=""/>
                        </div>
                        <ModalHeader toggle={modalFunc}>
                            <div className="home-h-theme-2">
                                <p>ТОВАР ДОБАВЛЕН В КОРЗИНУ</p>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-12 col-sm-12">
                                    <div className="tab-header">
                                        <div className="text1">
                                            Наеменование
                                        </div>
                                        <div className="text2">
                                            Количество
                                        </div>
                                        <div className="text3">
                                            Цена
                                        </div>
                                        <div className="text4">
                                            Цвет
                                        </div>
                                        <div className="text5">
                                            Размер
                                        </div>
                                    </div>
                                    {
                                        map.map((item, index) => (
                                            <div key={index} className="tab-menu">

                                                <div className="tab-sec">
                                                    <div className="img-t">
                                                        <img src={item.url} alt=""/>
                                                    </div>
                                                    <div className="tab-text">
                                                        <div className="title">
                                                            {item.title1}
                                                        </div>
                                                        <p>{item.title2}</p>
                                                    </div>
                                                </div>
                                                <div className="tab-sec-1">
                                                    <div onClick={() => wer(item.id)} className="inc-0">
                                                        -
                                                    </div>
                                                    <div className="inc-1">
                                                        {item.amal} шт
                                                    </div>
                                                    <div onClick={() => wera(item.id)} className="inc-2">
                                                        +
                                                    </div>
                                                </div>
                                                <div className="tab-sec-2">
                                                    <div className="solary">
                                                        {(item.amal) * (item.solary)} cум.
                                                    </div>
                                                </div>
                                                <div className="tab-sec-3">
                                                    <input type="radio"/>
                                                </div>
                                                <div className="tab-sec-4">
                                                    <p>{item.raz}</p>
                                                </div>
                                                <div onClick={() => kes(item.id)} className="tab-sec-5">
                                                    <img src="/img/xx.png" alt=""/>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div className="chiz">

                                    </div>
                                    <div className="qiymat">
                                        <div className="cek">
                                            ИТОГ :
                                        </div>
                                        <div className="cek-0">
                                            {map.length} шт
                                        </div>
                                        <div className="cek-1">

                                            {sum} сум
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <div className="card-button">
                            <div className="card-left">
                                ОФОРМИТЬ ЗАКАЗ
                            </div>
                            <div className="card-right">
                                CLEAR
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>

           <div className="boda">
               <div className="row p-0">
                   <div className="col-md-4 col-12 col-lg-4 col-sm-12 p-0">
                       <Modal isOpen={modal1} toggle={modalFunc1}>
                           <div onClick={modalFunc1} className="pod">
                               <img src="/img/xx.png" alt=""/>
                           </div>
                           <ModalHeader toggle={modalFunc1}> <div className="home-h-theme-2">
                           </div></ModalHeader>
                           <form action="">
                               <input className='form-control' placeholder='  Ваш номер' type="text"/>
                               <input className='form-control' placeholder='  Ваш пароль' type="password"/>
                           </form>
                           <div className="registr-k">
                               АВТОРИЗАЦИЯ
                           </div>
                           <div className="text-reg">
                               Забыли пароль?
                           </div>
                           <div className="registr-k">
                               ПОЛУЧИТЬ СМС ДЛЯ ВХОДА
                           </div>
                           <div className="text-reg1">
                               Нет аккаунта?
                           </div>
                           <div className="registr-k">
                               РЕГИСТРАЦИЯ
                           </div>
                       </Modal>

                   </div>
               </div>
           </div>

        </div>
    );
}

export default NavbarJs;