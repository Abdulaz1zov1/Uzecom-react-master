import React from 'react';
import SaytAboutCom from "../component/smallComponent/SaytAboutCom";
import LayOut from "../component/smallComponent/LayOut";
function SaytAbout(props) {
    return (
        <div>
            <LayOut>
                <SaytAboutCom/>
            </LayOut>
        </div>
    );
}

export default SaytAbout;