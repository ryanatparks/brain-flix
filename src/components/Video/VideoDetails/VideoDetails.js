import './VideoDetails.scss';


function VideoDetails ({currentVideo}) {

    //Converting timestamp from JSON to another Date format
    function convertDate() {
    const fullDate = new Date(currentVideo?.timestamp)

    let day = ("0" + (fullDate.getDate())).slice(-2);
    let month = ("0" + (fullDate.getMonth()+1)).slice(-2);
    let year = fullDate.getFullYear();

    let monthDateYear = (month) + '/' + day + "/" + year; 

    return monthDateYear;
}

    const formattedDate = convertDate()

    return (
    <section className = 'video__details'>
        <h1 className = 'video__title'>{currentVideo?.title}</h1>
            <div className = 'video__data'>
                <div className = 'video__data-left'>
                    <h3 className = 'video__data-channel'>By {currentVideo?.channel}</h3>
                    <span className = 'video__data-date'>{formattedDate}</span>
                </div>
                <div className = 'video__data-right'>
                    <div className = 'video__data-icon'>
                        <img className = 'video__views-icon' src = 'http://localhost:8080/Icons/views.svg' alt = 'Video views icon'></img>
                        <span className = 'video__data-views'>{currentVideo?.views}</span>
                    </div>
                    <div className = 'video__data-likes'>
                        <img className = 'video__likes-icon' src = 'http://localhost:8080/Icons/likes.svg' alt = "video likes icon"></img>
                        <span className = 'video__data-likes'>{currentVideo?.likes}</span>
                    </div>
                </div>
            </div>
        <p className = 'video__description'>{currentVideo?.description}</p>
    </section>
    );
}

export default VideoDetails;

