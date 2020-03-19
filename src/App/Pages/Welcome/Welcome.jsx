import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx'
import Slideshow from './Slideshow/Slideshow.jsx';
import Video from './Video/Video.jsx';


const Welcome = () => {
    return (
        <div className={ 'Pages Welcome' }>
            
            <Slideshow />
            
            <Tabbed />
            
            <Video />

        </div>
    );
}

export default Welcome;