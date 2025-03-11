import "./HeroSection.css";
import { Link } from "react-router-dom";
import left_hs from "../assets/left_hs.png";
import right_hs from "../assets/right_hs.png";
import top_hs from "../assets/top_hs.png";
import bottom_hs from "../assets/bottom_hs.png";

const HeroSection = () => {
  return (
    <section className="section_container">
      <div className="left_section">
        <img src={left_hs} className="left_hs" />
      </div>
      <div className="middle_section">
        <div>
          <img src={top_hs} className="top_hs" />
        </div>
        <div className="center_container">
          <h2 className="hs_first_heading">PREMIUM</h2>
          <h2 className="hs_second_heading">COLLECTION</h2>
          <Link to="/products">
            <button className="white_btn">SHOP NOW</button>
          </Link>
        </div>
        <div>
          <img src={bottom_hs} className="bottom_hs" />
        </div>
      </div>
      <div className="right_section">
        <img src={right_hs} className="right_hs" />
      </div>
    </section>
  );
};
export default HeroSection;
