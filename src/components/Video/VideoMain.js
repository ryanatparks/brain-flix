import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './VideoMain.scss'
import videoDetails from '../../data/video-details.json';
import videoData from '../../data/videos.json';
import VideoDetails from '../../components/Video/VideoDetails';
import CommentsForm from '../Comments/CommentsForm';
import CommentsList from '../Comments/CommentsList';
import VideoList from '../Video/VideoList';


function VideoMain ({videoList}) {

    const params = useParams()

    const videoId = params.videoId ? params.videoId: videoList[0]?.id;

    // setting the currentVideo using id of first video
    const [currentVideo, setCurrentVideo] = useState([]);

    const apiKey = 'ff1db921-2d5e-4c5f-9b58-cf9c48a96ff5'

    useEffect(()=> {
        if (!videoId) {
            return;
        }
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then(response => {
            setCurrentVideo(response.data)
        })
        .catch(error => {
            console.error('Error fetching data', error);
          })
    }, [videoId])

    //filtering nextVideos array to not include the currentVideo
    // let nextVideos = props.videoList?.filter(video => video.id !== currentVideo.id)

    const handleVideoSelect = video => {
        
        setCurrentVideo(video)
        console.log(videoList)
    }   

    return (
    <main>
        <div className = 'video__container'>
            <video className = 'video__main' controls poster = {currentVideo?.image}></video>
        </div>
        <div className = 'video__subcontainer'>
        <div className = 'video__subcontainer-left'>
            <VideoDetails currentVideo = {currentVideo}></VideoDetails>
            <CommentsForm currentVideo = {currentVideo}></CommentsForm>
            <CommentsList currentVideo = {currentVideo}></CommentsList>
        </div>
        <VideoList 
            currentVideo = {currentVideo} 
            videoList = {videoList}
            handleVideoSelect = {handleVideoSelect}
        >
        </VideoList>
        </div>
    </main>
    );
    }

export default VideoMain;