import { Link } from 'react-router-dom';
import '../styles/one.css'

const One = () => {
    return ( 
        <div className="one">
          <section class="part1">
            <div className="info1">
        <span><h1>Being</h1></span>
        <span><h1 className="heading">Relentless</h1></span>
        <p>
          This is the single most important factor of success in
          entrepreneurship.
        </p>
        <br />
        <p>
          Idea,Market,Product,Technology, Distribution..evrything evolves if the
          founder is Relentless.
        </p>
        <br />
        <Link to="/apply" className="button_apply">Sign up</Link>
        <button className="abc">VC&E Course</button>
      </div>
      <div className="image1">
        <img width="400px" height="450px" src="images/pic3.png" alt="" />
      </div>
      </section>
        </div>
     );
}
 
export default One;