
import './Upload.scss'
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Upload () {

const navigate = useNavigate();

//State variables to store input values
// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');

//HandleFormSubmit function to prevent refresh on form submission, alert user form was submitted, and navigate to home
const handleFormSubmit = (e) => { 
    e.preventDefault()

    const title = e.target.title.value
    const description = e.target.description.value

    console.log(title, description)
    axios.post('http://localhost:8080/videos', 
    { title: title, 
    description: description})
    .then(() => {
        console.log("Video uploaded successfully")


        alert('Form successfully submitted');
        navigate("/");  
    })
    .catch((error) => {
        console.error ("Error uploading video", error)
        alert('Error uploading video')
    })
}



return (
    <section className = "upload">
        <div className = "upload__heading-container">
            <h1 className = "upload__heading">Upload Video</h1>
        </div>
        <div className='upload__subcontainer'>
            <form className = "upload__form" onSubmit = {handleFormSubmit}>
                <div className = "upload__thumbnail-and-inputs">
                <div className = 'upload-video-thumbnail-container'>
                    <p className = "upload__video-thumbnail-label">VIDEO THUMBNAIL</p>
                    <img className = "upload__video-thumbnail" src = 'http://localhost:8080/images/Upload-video-preview.jpg' alt = "POV of person riding a bicycle"></img>
                </div>
                <div className = "upload__form-inputs">
                    <label className = "upload__form-title-label">TITLE YOUR VIDEO</label>
                    <input id = "upload__title-input" name = "title" placeholder='Add a title to your video' required></input>
                    <label className = "upload__form-description-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea id = "upload__description-input" name = "description" placeholder='Add a description to your video' required></textarea>
                </div>
                </div>
                <div className = "upload__form-button-container">
                <Link className = 'upload__cancel-link' to='/'>
                    <button className = "upload__form-cancel-button">CANCEL</button>
                    </Link>
                    <button type = 'submit' className = "upload__form-publish-button">PUBLISH</button>
                    <img className = "upload__form-publish-button-icon" src = 'http://localhost:8080/Icons/publish.svg' alt = 'Publish button icon'></img>
                </div>
        </form>
        </div>
    </section>
);
}

export default Upload;