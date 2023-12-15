import logo from './logo.svg';
import Header from './components/Header/Header';
import VideoMain from './components/Video/VideoMain';
import VideoList from './components/Video/VideoList';
import Upload from './components/Upload/Upload';
import './App.scss';
import videoDetails from './data/video-details.json'
import './components/Comments/CommentsCard.scss';
import './components/Comments/CommentsForm.scss';
import './components/Comments/CommentsList.scss';
import './components/Header/Header.scss';
import './components/Video/VideoDetails.scss';
import './components/Video/VideoList.scss';
import './components/Video/VideoMain.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  //setting videoList (the ones tha appear in the sidebar) as a state
  const [videoList, setVideoList] = useState([]);

  const apiKey = 'ff1db921-2d5e-4c5f-9b58-cf9c48a96ff5'

  useEffect(() => {
    if (!videoList) {
      return;
  }
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then(response => {
        setVideoList(response.data)
    })
    .catch(error => {
      console.error('Error fetching data', error);
    })
}, [])
  //axios call, get first video id, pass the id into videoMain as a prop
  

  return (
    <BrowserRouter>
    <div className = 'App'>
    <Header ></Header>
      <Routes>
        <Route path = "/" element = {<VideoMain apiKey = {apiKey} videoList = {videoList} setVideoList = {setVideoList}/>}/>
        <Route path = "/:videoId" element = {<VideoMain apiKey = {apiKey} videoList = {videoList} setVideoList = {setVideoList}/>}/>
        <Route path = "/upload" element = {<Upload/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
