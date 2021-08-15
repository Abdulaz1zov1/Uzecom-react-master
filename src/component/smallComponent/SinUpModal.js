import React,{useState} from 'react';
import {Modal, ModalHeader} from "reactstrap";
import '../../style/modal.scss'
function SinUpModal(props) {
    const [modal1,setModal1]=useState(true)
    function modalFunc1() {
        setModal1(!modal1)
    }
    return (
        <div>
            <div className="boda">
                <div className="row p-0">
                    <div className="col-md-12 col-12 col-lg-12 col-sm-12 p-0">
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

export default SinUpModal;