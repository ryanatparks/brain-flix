import { useState } from 'react'
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';
import VideoDetails from '../../components/Video/VideoDetails';
import CommentsForm from '../Comments/CommentsForm';
import CommentsList from '../Comments/CommentsList';


function VideoMain () {

    const videoIndex = 0
    
    const [mainVideo, setMainVideo] = useState(videoDetails[videoIndex]);

    const commentsArray = (videoDetails[videoIndex].comments);

    const videoListRest = videoDetails.slice(1);

    

    return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {mainVideo.image}></video>
        </div>
        <VideoDetails mainVideo = {mainVideo}></VideoDetails>
        <CommentsForm mainVideo = {mainVideo}></CommentsForm>
        <CommentsList commentsArray = {commentsArray}></CommentsList>
    </main>
    );
}

export default VideoMain;