import { Link, Outlet, Navigate } from "react-router-dom";

const Admin = () => {
  // FEATURE: check role user
  const user = { role: "user" };

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/sales">Sales</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Sellers</Link>
        </li>
      </ul>

      {/* show ui in child component */}
      <Outlet />
    </div>
  );
};

export default Admin;
