import React from 'react';
import YouTube from 'react-youtube';
import './Video.scss';

const Video = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };


    return (
        <div className="Video">
            <YouTube
                videoId="bJnf9D_4xRk"
                opts={opts}
                // onReady={this._onReady}
            />
            
        </div>

    );
}

export default Video;