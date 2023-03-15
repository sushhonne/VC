import { Link } from "react-router-dom";
import "../styles/two.css";

const Two = () => {
  return (
    <div className="two">
      <section className="part2">
        <div className="info2">
          <span>
            <h1>We back</h1>
          </span>
          <span>
            <h1 className="heading">Relentless Founders</h1>
          </span>
          <p>
            We like to think of founders journey as a vortex, or a tornado. We
            call it The Idea Vortex
          </p>
          <br />
          <Link to="/apply" className="button_apply">
            Apply for funding
          </Link>
        </div>
        <div className="image2">
          <img width="400px" height="450px" src="images/pic2.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Two;
