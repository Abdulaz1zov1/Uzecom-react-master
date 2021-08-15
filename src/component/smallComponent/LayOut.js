import React from 'react';
import NavbarJs from './NavbarJs'
import FooterComp from './FooterComp'

function LayOut(props) {
    return (
        <div>
            <NavbarJs/>
            {props.children}
            <FooterComp/>
        </div>
    );
}

export default LayOut;