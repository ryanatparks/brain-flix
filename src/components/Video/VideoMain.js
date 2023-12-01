import { useState } from 'react'
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';
import videoData from '../../data/videos.json';
import VideoDetails from '../../components/Video/VideoDetails';
import CommentsForm from '../Comments/CommentsForm';
import CommentsList from '../Comments/CommentsList';
import VideoList from '../Video/VideoList'


function VideoMain () {

    const [videoIndex, setVideoIndex] = useState(0);
    
    const [currentVideo, setCurrentVideo] = useState(videoDetails[videoIndex]);

    const [nextVideos, setNextVideos] = useState(videoData.filter(video => video.id !== currentVideo.id));


    const handleVideoSelect = (selectedVideo) => {

        const selectedIndex = nextVideos.findIndex((video) => video.id === selectedVideo.id)

        //Move the current video back tot he nextVideos array
        setNextVideos((prevNextVideos) => [currentVideo, ...prevNextVideos]);


        //Filter out the selected video from the list of next videos
        setNextVideos(prevNextVideos => prevNextVideos.filter(video => video.id !== selectedVideo.id));
        ;

        //Set the selected video as the current video
        setCurrentVideo(selectedVideo);

        setVideoIndex(selectedIndex);
    };

    //Sorting function based on original index
    const sortNextVideos = (a, b) => a.index - b.index;
    

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
            sortNextVideos = {sortNextVideos}
            videoIndex = {videoIndex}
        >
        </VideoList>
    </main>
    );
    }

export default VideoMain;