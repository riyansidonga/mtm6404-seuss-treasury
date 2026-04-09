import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  )
}

export default Navbar