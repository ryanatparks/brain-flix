import avatarImage from '../../assets/images/Mohan-muruge.jpg';
import './CommentsForm.scss'
import addCommentIcon from '../../assets/Icons/add_comment.svg'

function CommentsForm ({currentVideo}) {

    return (
        <section className = "comment">
            <span className = "comment__count">{currentVideo.comments?.length} Comments</span>
            <div className = "comment__container-wrap">
                <img className =  'comment__avatar-image' src = {avatarImage}></img>
                <form id = 'comment__form'>
                    <label className = "comment__label" for = "comments">JOIN THE CONVERSTATION</label>
                    <div className = 'comment__input-button-container'>
                    <textarea id = 'comment' placeholder = 'Add a new comment' name = 'comments'></textarea>
                        <div className = "comment__button-container">
                            <img className = "comment__button-icon" src = {addCommentIcon}></img>
                            <button className = "comment__button">COMMENT</button>
                        </div>
                    </div>    
                </form>
            </div>
        </section>
        )
    }


export default CommentsForm;
