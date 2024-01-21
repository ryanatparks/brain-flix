import './CommentsForm.scss'


function CommentsForm ({currentVideo}) {

    return (
        <section className = "comment">
            <span className = "comment__count">{currentVideo.comments?.length} Comments</span> 
            <div className = "comment__container-wrap">
                <img className =  'comment__avatar-image' src = 'http://localhost:8080/images/Mohan-muruge.jpg'></img>
                <form id = 'comment__form'>
                    <label className = "comment__label" htmlFor = "comments">JOIN THE CONVERSTATION</label>
                    <div className = 'comment__input-button-container'>
                    <textarea id = 'comment' placeholder = 'Add a new comment' name = 'comments'></textarea>
                        <div className = "comment__button-container">
                            <img className = "comment__button-icon" src = 'http://localhost:8080/assets/Icons/add_comment.svg' alt = 'Add comment button icon'></img>
                            <button className = "comment__button">COMMENT</button>
                        </div>
                    </div>    
                </form>
            </div>
        </section>
        )
    }


export default CommentsForm;
