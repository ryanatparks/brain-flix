import CommentsCard from '../CommentsCard/CommentsCard'

function CommentsList ({currentVideo}) {

return (

<section className = 'comment__section'>
    {currentVideo.comments?.map((content) => ( //Mapping comments data for the CommentsCard component
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