import { Link, NavLink, useLocation } from "react-router";
import "./Nav.css";

function Nav() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  const navLinks = [
    {
        path: '/posts',
        name: 'POSTY'
    }
    {
        path: '/login',
        name: 'LOGIN'
    }
    {
        path: '/posts',
        name: 'POSTY'
    }
  ]
  return isLogin ? null : (
    <nav>
      <span>LOGO</span>

      <div className="links">
        <NavLink to="/posts" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-gray" }>POSTY</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-gray" }>LOGIN</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-gray" }>DASHBOARD</NavLink>
        <a href="https://wp.pl">WP.PL</a>
      </div>
    </nav>
  );
}
export default Nav;
