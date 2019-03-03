import React from 'react';
import './Header.css';
import LogoImage from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer(){
    return(
        <div className="header">
        <LogoImage/>
        <HeaderContent/>
        
        </div>

    );
}

export default HeaderContainer;