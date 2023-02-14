import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/user"><li>User</li></Link>
    </ul>
  )
}

export default Header;