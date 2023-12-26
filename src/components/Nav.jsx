import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to='/' className="link">ALL</NavLink>
      <NavLink to='fullstack' className="link">Full stack development</NavLink>
      <NavLink to='datascience' className="link">data science</NavLink>
      <NavLink to='cyber' className="link">cyber security</NavLink>
      <NavLink to='career' className="link">career</NavLink>
    </nav>
  )
}

export default Nav