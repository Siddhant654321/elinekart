import "./HeroSection.css";
import hero_image from "../assets/hero_image.png";
import arrow_icon from "../assets/arrow_icon.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="section_container">
      <div className="left_side">
        <h1>
          WE OFFER YOU THE <span>BEST </span> COLLECTION OF <span>GADGETS</span>
        </h1>
        <p>Your ultimate destination for the finest electronic gadgets</p>
        <Link className="explore_btn_link_tag" to="/products">
          <button className="explore_btn">
            Explore the collection <img src={arrow_icon} alt="" />
          </button>
        </Link>
      </div>
      <div className="right_side">
        <img src={hero_image} alt="" />
      </div>
    </section>
  )
}
export default HeroSection