import logo from './logo.svg';
import Header from './components/Header/Header';
import VideoMain from './components/Video/VideoMain';
import './App.scss';
import videoDetails from './data/video-details.json'
import './components/Comments/CommentsCard.scss';
import './components/Comments/CommentsForm.scss';
import './components/Comments/CommentsList.scss';
import './components/Header/Header.scss';
import './components/Video/VideoDetails.scss';
import './components/Video/VideoList.scss';
import './components/Video/VideoMain.scss';

function App() {


  return (
    <div className = 'App'>
      <Header ></Header>
      <VideoMain ></VideoMain>
    </div>
  );
}

export default App;
