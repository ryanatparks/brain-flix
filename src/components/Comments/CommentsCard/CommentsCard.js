import './CommentsCard.scss'

function CommentsCard (props) {

    function convertDate() {
        const fullDate = new Date(props.timestamp)
    
        let day = ("0" + (fullDate.getDate())).slice(-2);
        let month = ("0" + (fullDate.getMonth()+1)).slice(-2);
        let year = fullDate.getFullYear();
    
        let monthDateYear = (month) + '/' + day + "/" + year; 
    
        return monthDateYear;
    }

    const formattedDate = convertDate()

return (
    <article className = 'comment__card'>
        <div className = 'comment__subcontainer'>
            <div className = 'comment__avatar-circle'>
        </div>
            <div className = 'comment__subcontainer-column'>
                <div className = 'comment__subcontainer-row'>
                    <h3 className = 'comment__name'>{props?.name}</h3>
                    <span className = 'comment__date'>{formattedDate}</span>
                </div>
                <p className ="comment__comment">{props?.comment}</p>
                </div>
            </div>
    </article>
)
}

export default CommentsCard;