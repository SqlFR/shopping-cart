import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-900">
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </div>
  )
}

export default Header;