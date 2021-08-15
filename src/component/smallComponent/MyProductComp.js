import React,{useState} from 'react';
import '../../style/myproduct.scss'

function MyProductComp(props) {
    const [amal,setAmal]=useState(1)
    function wer() {
        if (amal>0){
            setAmal(amal-1)
        }
    }
    function wera() {
        setAmal(amal+1)
    }
    return (
        <div className='mb-5'>
            <div className="new-img1">

            </div>
            <div className="container">
                <div className="home-h-theme">
                    <p>Мои заказы</p>
                </div>
                <div className="nomer">
                    Заказ № 5234
                </div>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-12 col-sm-12">
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
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-8 col-lg-3 col-md-3">
                        <div className="tab-button">
                            ПOСМОТРЕТЬ ЗАКАЗ
                        </div>
                    </div>

                </div>
                <div className="nomer">
                    Заказ № 5234
                </div>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-12 col-sm-12">
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
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-8 col-lg-3 col-md-3">
                        <div className="tab-button">
                            ПOСМОТРЕТЬ ЗАКАЗ
                        </div>
                    </div>

                </div>
                <div className="nomer">
                    Заказ № 5234
                </div>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-12 col-sm-12">
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
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                        <div className="tab-menu">
                            <div className="tab-sec">
                                <div className="img-t">
                                    <img  src="/img/x-0.png" alt=""/>
                                </div>
                                <div className="tab-text">
                                    <div className="title">
                                        ZARA рубашка
                                    </div>
                                    <p>Рубашка с контрастным дизайном</p>
                                </div>
                            </div>
                            <div className="tab-sec-1">
                                <div onClick={wer} className="inc-0">
                                    -
                                </div>
                                <div className="inc-1">
                                    {amal} шт
                                </div>
                                <div onClick={wera} className="inc-2">
                                    +
                                </div>
                            </div>
                            <div className="tab-sec-2">
                                <div className="solary">
                                    {amal*(100000)} cум.
                                </div>
                            </div>
                            <div className="tab-sec-3">
                                <input type="radio"/>
                            </div>
                            <div className="tab-sec-4">
                                <p>XS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-8 col-lg-3 col-md-3">
                        <div className="tab-button">
                            ПOСМОТРЕТЬ ЗАКАЗ
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyProductComp;