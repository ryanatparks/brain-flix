import "./Header.scss";
import { Link } from "react-router-dom";


function Header() {
    return <header className = 'header'>
        {/* Linking Brainflix logo to the homepage */}
        <Link to={'/'}>
        <img className = "header__logo" src = 'http://localhost:8080/Logo/BrainFlix-logo.svg' alt = 'Brainflix Logo'></img>
        </Link>
        <div className = "header__nav-right">
        <section className = "header__search-section">
            <div className = "header__search-container">
                <form className = 'header__form-field'>
                    <input id = 'search-bar' type="text" placeholder = "Search"></input>
                </form>
                <img className = "header__search-icon" src = 'http://localhost:8080/Icons/search.svg' alt = 'Search Bar Icon'></img>
            </div>
                <img className = "header__avatar-logo-mobile" src = 'http://localhost:8080/images/Mohan-muruge.jpg' alt = 'Avatar Logo'></img>
        </section>
        {/* Linking upload button to the Upload page */}
        <Link to={'upload'}>
        <div className = 'header__upload-button-container'>
            <button className = 'header__upload-button'>UPLOAD</button>
            <img className = 'header__upload-button-icon' src = 'http://localhost:8080/Icons/upload.svg' alt = 'Upload Button Icon'></img>
        </div>
        </Link>
        <img className = "header__avatar-logo-tablet" src = 'http://localhost:8080/images/Mohan-muruge.jpg' alt = 'Avatar Logo'></img>
        </div>
    </header> 
}


export default Header;