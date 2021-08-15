import React from 'react';
import MySolary from "../component/smallComponent/MySolary";
import LayOut from "../component/smallComponent/LayOut";
function SolaryPage(props) {
    return (
        <div>
            <LayOut>
                <MySolary/>
            </LayOut>
        </div>
    );
}

export default SolaryPage;