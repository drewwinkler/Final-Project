import React from 'react';
import './youtube-video.scss';
import 'youtube-video-js';
import { YoutubeVideoElement } from 'youtube-video-js';

const Video = () => {
    <script
        type="module"
        src="/node_modules/youtube-video-js/dist/youtube-video.js"
    ></script>
    <youtube-video
        width="640"
        height="360"
        scr="https://www.youtube.com/watch?v=bJnf9D_4xRk"
        autoplay
        controls
        />

        <script>
        const videoElement = document.querySelector('youtube-video');
    
        // must wait for DOM to be ready and for component to be accessible

        document.addEventListener('DOMContentLoaded', function() {
            // wait for loading
            videoElement.load().then(() => {
                // pause video after two seconds
                const timer = setTimeout(function() {
                    videoElement.pause();
                    clearTimeout(timer);
                }, 2000);
            });
        });
    </script> 
}

export default Video;