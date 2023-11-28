import CommentsCard from '../Comments/CommentsCard'

function CommentsList (props) {

return (

<section className = 'comment__section'>
    {props.commentsArray.map((content) => (
        <CommentsCard 
            key = {content.id}
            name = {content.name}
            comment = {content.comment}
            timestamp = {content.timestamp}

        />
    ))}
    
</section>

)

}

export default CommentsList