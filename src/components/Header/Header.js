import logo from '../../assets/Logo/BrainFlix-logo.svg';
import "./Header.scss";
import AvatarIcon from '../../assets/images/Mohan-muruge.jpg';
import searchBarIcon from '../../assets/Icons/search.svg';
import uploadButtonIcon from '../../assets/Icons/upload.svg';
import { Link } from "react-router-dom";


function Header(props) {
    return <header className = 'header'>
        <Link to={'/'}>
        <img className = "header__logo" src = {logo} alt = 'Brainflix Logo'></img>
        </Link>
        <div className = "header__nav-right">
        <section className = "header__search-section">
            <div class = "header__search-container">
                <form className = 'header__form-field'>
                    <input id = 'search-bar' type="text" placeholder = "Search"></input>
                </form>
                <img className = "header__search-icon" src = {searchBarIcon} alt = 'Search Bar Icon'></img>
            </div>
                <img className = "header__avatar-logo-mobile" src = {AvatarIcon} alt = 'Avatar Logo'></img>
        </section>
        <Link to={'upload'}>
        <div className = 'header__upload-button-container'>
            <button className = 'header__upload-button'>UPLOAD</button>
            <img className = 'header__upload-button-icon' src = {uploadButtonIcon} alt = 'Upload Button Icon'></img>
        </div>
        </Link>
        <img className = "header__avatar-logo-tablet" src = {AvatarIcon} alt = 'Avatar Logo'></img>
        </div>
    </header> 
}


export default Header;