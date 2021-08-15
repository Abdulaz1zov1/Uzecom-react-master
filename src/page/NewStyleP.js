import React from 'react';
import LayOut from "../component/smallComponent/LayOut";
import PageHeader from "../component/newstyleComp/PageHeader";
import '.././style/newstyle.scss'
function NewStyleP(props) {
    return (
        <div>
            <LayOut>
                <PageHeader/>
            </LayOut>
        </div>
    );
}

export default NewStyleP;