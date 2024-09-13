import "./Navbar.style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>1st11-Movie</h1>

      <div className="navbar_links">
        <a href="#">
          Popular
          <i className="bx bx-upvote"></i>
        </a>
        <a href="#">
          Top Rated
          <i className="bx bx-star"></i>
        </a>
        <a href="#">
          Upcoming
          <i className="bx bxs-chevrons-up"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
