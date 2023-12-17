import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishButtonIcon from '../../assets/Icons/publish.svg';
import './Upload.scss'
import { Link, useNavigate, redirect } from 'react-router-dom';

function Upload () {

const navigate = useNavigate();

//HandleFormSubmit function to prevent refresh on form submission, alert user form was submitted, and navigate to home
const handleFormSubmit = (e) => { 
    e.preventDefault()
    alert('Form successfully submitted');
    navigate("/");

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
                    <img className = "upload__video-thumbnail" src = {videoThumbnail} alt = "POV of person riding a bicycle"></img>
                </div>
                <div className = "upload__form-inputs">
                    <label className = "upload__form-title-label">TITLE YOUR VIDEO</label>
                    <input id = "upload__title-input" placeholder='Add a title to your video' required></input>
                    <label className = "upload__form-description-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea id = "upload__description-input" placeholder='Add a description to your video' required></textarea>
                </div>
                </div>
                <div className = "upload__form-button-container">
                <Link className = 'upload__cancel-link' to='/'>
                    <button className = "upload__form-cancel-button">CANCEL</button>
                    </Link>
                    <button className = "upload__form-publish-button">PUBLISH</button>
                    <img className = "upload__form-publish-button-icon" src = {publishButtonIcon} alt = 'Publish button icon'></img>
                </div>
        </form>
        </div>
    </section>
);
}

export default Upload;