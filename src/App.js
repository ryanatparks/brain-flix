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

function App() {


  return (
    <BrowserRouter>
    <div className = 'App'>
    <Header ></Header>
      <Routes>
        <Route path = "/" element = {<VideoMain/>}/>
        <Route path = "video/:videoId" element = {<VideoList/>}></Route>
        <Route path = "upload" element = {<Upload/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
