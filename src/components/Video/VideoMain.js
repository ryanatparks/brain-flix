import { useState } from 'react'
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';
import videoData from '../../data/videos.json';
import VideoDetails from '../../components/Video/VideoDetails';
import CommentsForm from '../Comments/CommentsForm';
import CommentsList from '../Comments/CommentsList';
import VideoList from '../Video/VideoList'


function VideoMain () {

    //setting videos state to the videoDetails data
    const [videos, setVideos] = useState(videoDetails);
    //setting the currentVideo to the first video in array.
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    //filtering nextVideos array to not include the currentVideo
    let nextVideos = videos.filter(video => video.id !== currentVideo.id);

    const handleVideoSelect = video => {
        
        setCurrentVideo(video)
        
    }   


    return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {currentVideo.image}></video>
        </div>
        <VideoDetails currentVideo = {currentVideo}></VideoDetails>
        <CommentsForm currentVideo = {currentVideo}></CommentsForm>
        <CommentsList currentVideo = {currentVideo}></CommentsList>
        <VideoList 
            nextVideos = {nextVideos}
            handleVideoSelect = {handleVideoSelect}
        >
        </VideoList>
    </main>
    );
    }

export default VideoMain;