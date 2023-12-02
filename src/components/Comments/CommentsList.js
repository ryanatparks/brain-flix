import CommentsCard from '../Comments/CommentsCard'

function CommentsList (props) {

return (

<section className = 'comment__section'>
    {props.currentVideo.comments.map((content) => (
        <CommentsCard 
            key = {content.id}
            id = {content.id}
            name = {content.name}
            comment = {content.comment}
            timestamp = {content.timestamp}

        />
    ))}
    
</section>

)

}

export default CommentsList