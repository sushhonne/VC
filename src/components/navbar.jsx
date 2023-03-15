import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div classNameName="navbar">

<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid py-3">
            <a class="navbar-brand" href="#"><img width="50px" src="images/pic3.png" alt=""/>Relentless <span style={{color:"rgb(255, 119, 0)",backgroundColor:"#011b69"}}>VC</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="topnav-center"><img src="images/menu.png" alt="" /></span>
            </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/two">Course</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/three">Angels</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/four">PortFolio</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/five">Blog</Link>
                </li>
               <li class="nav-item">
               <Link to="/apply" className="bye">Sign up</Link>
               </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default Navbar;
