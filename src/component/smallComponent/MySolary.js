import React, {useState} from 'react';
import '../../style/myproduct.scss'

function MySolary(props) {
    const [pul,setPul]=useState(false)
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
    const sum=map.map((item)=>item.amal*item.solary).reduce((a,c)=>a+c);
    const sum1=map.map((item)=>item.amal).reduce((a,c)=>a+c);
    function wer(id) {
setPul(!pul)
        const product=map.find((item)=>item.id===id);
        const index=map.findIndex((item)=>item.id===id)
if (product.amal>0){
    product.amal-=1;
}

        const cart2=map;
        cart2.splice(index,1,product)
       setAmal(cart2)
    }

    function wera(id) {
        setPul(!pul)
        const product=map.find((item)=>item.id===id);
        const index=map.findIndex((item)=>item.id===id)
        product.amal+=1;
        const cart2=map;
        cart2.splice(index,1,product)
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

    return (
        <div className='mb-5'>
            <div className="new-img1 ">

            </div>
            <div className="container">
                <div className="home-h-theme">
                    <p>Заказ № 5234</p>
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

                        <div className="chiz">

                        </div>
                        <div className="qiymat">
                            <div className="cek">
                                ИТОГ :
                            </div>
                            <div className="cek-0">
                                {sum1} шт
                            </div>
                            <div className="cek-1">

                                {sum} сум
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-3 col-md-3">
                        <div className="registr">
                            <div className="reg-title">
                                Личные данные
                            </div>
                            <input className='form-control' placeholder='Бектаев Асадбек Абдухамидович' type="text"/>
                            <input className='form-control' placeholder='Узбекистан' type="text"/>
                            <input className='form-control' placeholder='г. Ташкент' type="text"/>
                            <input className='form-control' placeholder='Ул. Уртасарай Т 35' type="text"/>
                            <input className='form-control' placeholder='Completed' type="text"/>
                            <input className='form-control' placeholder='370 000 сум' type="text"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MySolary;