import './VideoCard.scss';

function VideoCard (props) {
    const {video, handleVideoSelect} = props

    return (
        <div className = 'video-card' onClick={() => handleVideoSelect(video)}>
            <img className = 'video-card__image' src = {video.image}></img>
                <div className = 'video-card__details'>
                <h3 className = 'video-card__title'>{video.title}</h3>
                <p className = 'video-card__channel'>{video.channel}</p>
                </div>    
        </div>
)
}    

export default VideoCard;
