import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx'
import Slideshow from './Slideshow/Slideshow.jsx';

const Welcome = () => {
    return (
        <div className={ 'Pages Welcome' }>
            
            <Slideshow />
            
            <Tabbed />



            <div className="columns">
                
            </div>
        </div>
    );
}

export default Welcome;