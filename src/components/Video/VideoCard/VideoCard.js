import './VideoCard.scss';
import { Link } from "react-router-dom";

function VideoCard ({video, handleVideoSelect}) {

    return (
        <Link className = 'video-card__link' key = {video.id} to= {`/${video.id}`}>
        <div className = 'video-card' onClick={() => handleVideoSelect(video)}>
            <img className = 'video-card__image' src = {video.image}></img>
                <div className = 'video-card__details'>
                <h3 className = 'video-card__title'>{video.title}</h3>
                <p className = 'video-card__channel'>{video.channel}</p>
                </div>    
        </div>
        </Link>
)   
}    

export default VideoCard;
