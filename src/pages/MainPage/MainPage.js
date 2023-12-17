import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './MainPage.scss'
import VideoDetails from '../../components/Video/VideoDetails/VideoDetails';
import CommentsForm from '../../components/Comments/CommentsForm/CommentsForm';
import CommentsList from '../../components/Comments/CommentsList/CommentsList';
import VideoList from '../../components/Video/VideoList/VideoList';


function VideoMain ({videoList, apiKey}) {

    const params = useParams()
    //setting videoId as the first video id, or the videoId from params 
    const videoId = params.videoId ? params.videoId: videoList[0]?.id;

    // setting the currentVideo using id of first video
    const [currentVideo, setCurrentVideo] = useState([]);

    //setting up useEffect to get Video details through get request, and have it run again when videoId is updated
    useEffect(()=> {
        if (!videoId) {
            return;
        }
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then(response => {
            setCurrentVideo(response.data)
            window.scrollTo(0, 0)
        })
        .catch(error => {
            console.error('Error fetching data', error);
          })
    }, [videoId]) 

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
        >
        </VideoList>
        </div>
    </main>
    );
    }

export default VideoMain;