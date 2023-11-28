import { useState } from 'react';
import avatarImage from '../../assets/images/Mohan-muruge.jpg';
import './CommentsForm.scss'
import addCommentIcon from '../../assets/Icons/add_comment.svg'

function Comments (props) {

    return (
        <section className = "comment">
            <div className = "comment__container-wrap">
                <img className =  'comment__avatar-image' src = {avatarImage}></img>
                <form id = 'comment__form'>
                    <label className = "comment__label" for = "comments">JOIN THE CONVERSTATION</label>
                    <textarea id = 'comment' placeholder = 'Add a new comment' name = 'comments'></textarea>
                        <div className = "comment__button-container">
                            <img className = "comment__button-icon" src = {addCommentIcon}></img>
                            <button className = "comment__button">COMMENT</button>
                        </div>
                </form>
            </div>
            <div className = 'comment__section'>
                <article className = 'comment-card'>
                    <div className = 'comment__subcontainer'>
                    <div className = 'comment__avatar-circle'>
                        <div className = 'comment__subcontainer-column'>
                        <div className = 'comment__subcontainer-row'>
                                    <h3 className = 'comment__name'>{props.mainVideo.name}</h3>



                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        )
    }


export default Comments;
