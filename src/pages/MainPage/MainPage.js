import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './MainPage.scss'
import VideoDetails from '../../components/Video/VideoDetails/VideoDetails';
import CommentsForm from '../../components/Comments/CommentsForm/CommentsForm';
import CommentsList from '../../components/Comments/CommentsList/CommentsList';
import VideoList from '../../components/Video/VideoList/VideoList';


function VideoMain () {

    //setting videoList (the ones tha appear in the sidebar) as a state
  const [videoList, setVideoList] = useState([]);
    const params = useParams()
    //setting videoId as the first video id, or the videoId from params 
    const videoId = params.videoId ? params.videoId: videoList[0]?.id;

    // setting the currentVideo using id of first video
    const [currentVideo, setCurrentVideo] = useState([]);

    useEffect(() => {
        if (!videoList) {
          return;
      }
        axios.get(`http://localhost:8080/videos`)
        // https://project-2-api.herokuapp.com/videos?api_key=${apiKey}
        .then(response => {
            setVideoList(response.data)
        })
        
        .catch(error => {
          console.error('Error fetching data', error);
        })
    }, [])
      //axios call, get first video id, pass the id into videoMain as a prop


    //setting up useEffect to get Video details through get request, and have it run again when videoId is updated
    useEffect(()=> {
        if (!videoId) {
            return;
        }
        axios.get(`http://localhost:8080/videos/${videoId}`)
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