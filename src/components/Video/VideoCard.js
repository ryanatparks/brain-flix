import './VideoCard.scss';

function VideoCard (props) {
    const {video, handleVideoSelect} = props

    return (
        <div className = 'video-list__card' onClick={() => handleVideoSelect(video)}>
            <img className = 'video-list__image' src = {video.image}></img>
            <span className = 'video-list__title'>{video.title}</span>
            <span className = 'video-list__channel'>{video.channel}</span>
        </div>
)
}    

export default VideoCard;
