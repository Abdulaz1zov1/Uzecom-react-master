import React, {useState} from 'react';
import '../../style/myproduct.scss'
function CheckProductP(props) {
    const [amal, setAmal] = useState(1)
    const [set,stateU]=useState(false)
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
    function wer(id) {
stateU(!set)
        const product=map.find((item)=>item.id===id);
        const index=map.findIndex((item)=>item.id===id)
if (product.amal>0){
    product.amal -= 1;
    const cart2 = map;
    cart2.splice(index, 1, product)
    setAmal(cart2)
}

    }
    function wera(id) {
        stateU(!set)
        const product=map.find((item)=>item.id===id);
        const index=map.findIndex((item)=>item.id===id)
        product.amal+=1;
        const cart2=map;
        cart2.splice(index,1,product)
        setAmal(cart2)
    }
    function kes(id) {
        stateU(!set)
        const cart2 = map
        const index = map.findIndex((item) => item.id === id)
        cart2.splice(index, 1)
        let a = [...cart2]
        setAmal(a)

    }
    return (
        <div>
            <div className="new-img1">

            </div>

            <div className="container">
                <div className="home-h-theme">
                    <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
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
                                        <div onClick={()=>wer(item.id)} className="inc-0">
                                            -
                                        </div>
                                        <div className="inc-1">
                                            {item.amal} шт
                                        </div>
                                        <div onClick={()=>wera(item.id)} className="inc-2">
                                            +
                                        </div>
                                    </div>
                                    <div className="tab-sec-2">
                                        <div className="solary">
                                            {(item.amal) *( item.solary)} cум.
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
                    </div>
                </div>
            </div>
            <div className="p-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                            <div className="title">
                                ВЫБЕРИТЕ ВАРИАНТ ДОСТАВКИ
                            </div>
                            <form action="">
                                <div className="p-sec">
                                    <input  name='alo' type="radio"/>
                                    <div className="sec">
                                        <div className="sec-1">
                                            Забрать самостоятельно на складе
                                        </div>
                                        <div className="sec-2">
                                            Доступно - сегодня(кроме выходных
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sec">
                                    <input  name='alo' type="radio"/>
                                    <div className="sec">
                                        <div className="sec-1">
                                            Бесплатная доставка автотранспортом.
                                        </div>
                                        <div className="sec-2">
                                            Для заказов от 400 000 сум.
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sec">
                                    <input  name='alo' type="radio"/>
                                    <div className="sec">
                                        <div className="sec-1">
                                            Платная доставка автотранспортом.
                                        </div>
                                        <div className="sec-2">
                                            Для заказов не сумму мене 200 000сум.
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sec">
                                    <input  name='alo' type="radio"/>
                                    <div className="sec">
                                        <div className="sec-1">
                                            Доступно в регионы Узбекистан
                                        </div>
                                        <div className="sec-2">
                                            Стоимость доставки оговаривается отделно.
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                            <div className="title">
                                УКАЖИТЕ ВАШИ ДАННЫЕ
                            </div>
                            <form action="">
                               <div className="input-sec">
                                   <input placeholder='  ФИО' className='form-range' type="text"/>
                               </div>
                               <div className="input-sec">
                                   <input placeholder=' Номер телефон' className='form-range' type="text"/>
                               </div>
                               <div className="input-sec">
                                   <input placeholder='Ваш e-mail' className='form-range' type="text"/>
                               </div>
                               <div className="input-sec">
                                   <input placeholder='Ваш Город' className='form-range' type="text"/>
                               </div>
                               <div className="input-sec">
                                   <input placeholder='Адресс доставки' className='form-range' type="text"/>
                               </div>
                            </form>

                        </div>
                    </div>
                    <div className="input-but">
                        <div className="button-p">
                            ОФОРМИТЬ ЗАКАЗ
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CheckProductP;