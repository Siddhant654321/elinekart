import getStars from "../utils/getStars";
import "./ReviewTab.css";

const ReviewTab = ({ comment, name, rating, createdAt }) => {
  const stars = getStars(rating);
  return (
    <div className="review_tab">
      <p className="review_comment">{comment}</p>
      <h3>{name}</h3>
      <div className="review_tab_rating_container">{stars}</div>
      <p>{createdAt.split('T')[0]}</p>
    </div>
  );
};
export default ReviewTab;
