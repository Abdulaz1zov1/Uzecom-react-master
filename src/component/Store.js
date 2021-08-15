
import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const Store = (props) => {
    const [products,setProducts]=useState([
        {id:1, url:'/img/k-1.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-2.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-3.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-4.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-5.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-6.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
        {id:1, url:'/img/k-7.png', text:" Рубашка с контрастным дизайном",title:'ZARA',solary:"100 000 cум", color:'/img/color.png'},
    ])
    const [cart, setCart] = useState([]);
    const [modal1,setModal1]=useState(false)
    const state = {
        products: [products,setProducts],
        cart: [cart, setCart],
        modal:[modal1,setModal1]
    };
    return (
        <StoreContext.Provider value={state}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default Store;