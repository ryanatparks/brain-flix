import { useState } from 'react'
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';
import VideoDetails from '../../components/Video/VideoDetails';
import Comments from './CommentsForm';


function VideoMain () {
    
    const [mainVideo, setMainVideo] = useState(videoDetails[0]);
    const videoListRest = videoDetails.slice(1);

    return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {mainVideo.image}></video>
        </div>
        <VideoDetails mainVideo = {mainVideo}></VideoDetails>
        <Comments mainVideo = {mainVideo}></Comments>
    </main>
    );
}

export default VideoMain;