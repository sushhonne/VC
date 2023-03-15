import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
      <a class="navbar-brand" href="#"><img width="50px" src="images/pic3.png" alt=""/>Relentless <span style={{color:"rgb(255, 119, 0)"}}>VC</span></a>
      </div>
      <div className="f2">
        <a href="">Home</a>
        <a href="">Course</a>
        <a href="">Angels</a>
        <a href="">Portfolio</a>
        <a href="">Blog</a>
      </div>
      <div className="f3">
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <button className="bye">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
