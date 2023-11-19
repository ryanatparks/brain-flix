import logo from './logo.svg';
import Header from './components/Header/Header';
import VideoMain from './components/Video/VideoMain';
import './App.scss';
import videoDetails from './data/video-details.json'

function App() {


  return (
    <div className = 'App'>
      <Header ></Header>
      <VideoMain ></VideoMain>
    </div>
  );
}

export default App;
