import React from 'react';
import MyProductComp from "../component/smallComponent/MyProductComp";
import LayOut from "../component/smallComponent/LayOut";
function MyProduct(props) {
    return (
        <div>
           <LayOut>
               <MyProductComp/>
           </LayOut>
        </div>
    );
}

export default MyProduct;