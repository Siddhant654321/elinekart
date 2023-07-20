import getStars from "../utils/getStars";
import "./ReviewTab.css";

const ReviewTab = ({ comment, name, rating, createdAt }) => {
  const stars = getStars(rating);
  return (
    <div className="review_tab">
      <p>{comment}</p>
      <h3>{name}</h3>
      <div className="review_tab_rating_container">{stars}</div>
    </div>
  );
};
export default ReviewTab;
