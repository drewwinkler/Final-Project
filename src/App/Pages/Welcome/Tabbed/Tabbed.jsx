import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/TabImages/about.png',
        title: 'About',
        text: 'Team Finder was an idea hatched by our founders who were sick and tired of getting paired up with random teammates through a games matchmaker. So they came together to create a one-stop-shop to find your next teamates for free.',
    },
    {
        image: '/img/TabImages/mission.png',
        title: 'Mission',
        text: 'Whether you are here to just find someone to socialize with or are here to find you next competitve teamate to climb up the competitive ladder, Team Finder has got something for everyone. Search and filter through thousands of members and find the one that right for you!',
    },
    {
        image: '/img/TabImages/vision.png',
        title: 'Vision',
        text: 'Our team wants to create a  single platform for you and your teammates. We have a lot in sotre for the future. One of the features we are curenlty working on is an up and comming voice chat feature free to all of our users! ',
    },
];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState( tabItems[0]);

    const isAbout = (currentTab.title === 'About') ? 'tab active': 'tab';
    const isMission = (currentTab.title === 'Mission') ? 'tab active': 'tab';
    const isVision = (currentTab.title === 'Vision') ? 'tab active': 'tab';

    return (
        <div className={ 'Tabbed' }>

            <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } } className={ isAbout }>About Us</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } } className={ isMission }>Why Team Finder?</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } } className={ isVision }>Vision</div>
            </div>

            <div className="content">
                <img src={ currentTab.image } alt='Tabbed'/>
                <h2>{ currentTab.title }</h2>
                <p>{ currentTab.text }</p>
            </div>

        </div>
    )
}

export default Tabbed;