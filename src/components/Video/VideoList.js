import { useState, useEffect } from 'react'
import './VideoList.scss'
import videoDetails from '../../data/video-details.json';
import VideoCard from '../Video/VideoCard'
import { Link } from "react-router-dom";

//Component for list of videos in the queue
function VideoList({ videoList, currentVideo, handleVideoSelect }) {
    
    
    return (
        <main>
            <div className='video-list__container'>
                <h1 className='video-list__header'>NEXT VIDEOS</h1>
                {videoList?.filter((video) => video.id !== currentVideo.id)
                ?.map((video) => (
                    <VideoCard
                        key={video.id}
                        id={video.id}
                        video={video}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                        handleVideoSelect={handleVideoSelect}
                    />
                ))}
            </div>
        </main>
    );
}



export default VideoList;