import React from 'react';
import CollapseComp from "../component/smallComponent/CollapseComp";
import LayOut from "../component/smallComponent/LayOut";
function CollapsePage(props) {
    return (
        <div>
            <LayOut>
                <CollapseComp/>
            </LayOut>
        </div>
    );
}

export default CollapsePage;