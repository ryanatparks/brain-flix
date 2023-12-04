import { useState } from 'react'
import './VideoList.scss'
import videoDetails from '../../data/video-details.json';
import VideoCard from '../Video/VideoCard'

//Component for list of videos in the queue
function VideoList (props) {

// const videosWithIndex = props.nextVideos.map((video, index) => ({...video, index}))

// const sortedVideos = videosWithIndex.slice().sort(props.sortNextVideos)

return (
    <main>
        <div className = 'video-list__container'>
            <h1 className = 'video-list__header'>NEXT VIDEOS</h1>
            {props.nextVideos.map((video) => 
                <VideoCard 
                key = {video.id}
                // id = {video.id}
                video = {video}
                image = {video.image}
                title = {video.title}
                channel = {video.channel}
                handleVideoSelect = {props.handleVideoSelect}
                />
            )}    
        </div>
    </main>
)}


export default VideoList;