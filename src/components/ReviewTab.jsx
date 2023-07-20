import './ReviewTab.css';

const ReviewTab = ({ comment, name, rating, createdAt}) => {
  return (
    <div className="review_tab">
        <p>{comment}</p>
        <h3>{name}</h3>
    </div>
  )
}
export default ReviewTab