import { useState } from 'react'
import './VideoList.scss'
import videoDetails from '../../data/video-details.json';

//Component for list of videos in the queue
function VideoList () {



return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {mainVideo.image}></video>
        </div>

    </main>
    );
}

export default VideoList;