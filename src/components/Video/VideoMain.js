import { useState } from 'react'
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';


function VideoMain () {
    
    const [mainVideo, setMainVideo] = useState(videoDetails[0]);
    const videoListRest = videoDetails.slice(1);

    return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {mainVideo.image}></video>
        </div>

    </main>
    );
}

export default VideoMain;