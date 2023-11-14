import logo from '../../assets/Logo/BrainFlix-logo.svg';
import "./Header.scss";
import AvatarIcon from '../../assets/images/Mohan-muruge.jpg';
import searchBarIcon from '../../assets/Icons/search.svg';
import uploadButtonIcon from '../../assets/Icons/upload.svg';


function Header(props) {
    return <header className = 'header'>
        <img className = "header__logo" src = {logo} alt = 'Brainflix Logo'></img>
        <section className = "header__search-section">
            <div class = "header__search-container">
                <form className = 'header__form-field'>
                    <input id = 'search-bar' type="text" placeholder = "Search"></input>
                </form>
                <img className = "header__search-icon" src = {searchBarIcon} alt = 'Search Bar Icon'></img>
            </div>
                <img className = "header__avatar-logo" src = {AvatarIcon} alt = 'Avatar Logo'></img>
        </section>
        <div className = 'header__upload-button-container'>
            <button className = 'header__upload-button'>UPLOAD</button>
            <img className = 'header__upload-button-icon' src = {uploadButtonIcon} alt = 'Upload Button Icon'></img>
        </div>
    </header> 
}


export default Header;