import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar_list">
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          {/* FEATURE: class "active" added when click link by using NavLink */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="/products">Products</a> */}
          {/* <Link to="/products">Products</Link> */}
          {/* FEATURE: class "active" added when click link by using NavLink */}
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          {/* <a href="/articles">Articles</a> */}
          {/* <Link to="/articles">Articles</Link> */}
          {/* FEATURE: class "active" added when click link by using NavLink */}
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          {/* <a href="/admin">Admin</a> */}
          {/* <Link to="/admin">Admin</Link> */}
          {/* FEATURE: class "active" added when click link by using NavLink */}
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
