import { Link } from "react-router";


export default function navbar() {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">SMARTCV</p>
        </Link>
        <Link to="/upload" className="primary-button w-fit">
            Upload Resume
        </Link>
    </nav>
  )
}
