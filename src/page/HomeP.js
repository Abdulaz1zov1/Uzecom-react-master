import React from 'react';
import LayOut from "../component/smallComponent/LayOut";
import HomeCarusel from '../component/homeComp/HomeCarusel'
import BrendCarusel from "../component/homeComp/BrendCarusel";
import ProductGame from "../component/homeComp/ProductGame";
import Rekalama from "../component/homeComp/Rekalama";
function HomeP(props) {
    return (
        <div>
            <LayOut>
                <HomeCarusel/>
                <BrendCarusel/>
                <ProductGame/>
                <Rekalama/>
            </LayOut>
        </div>
    );
}

export default HomeP;