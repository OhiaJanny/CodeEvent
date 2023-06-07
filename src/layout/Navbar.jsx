import logo from '../assets/logo.png'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'


const navDataLinks1 = [
  {
    to: '/',
    link: 'Home'
  },
  {
    to: '/coaching',
    link: 'Coaching'
  },
]

const navDataLinks2 = [
  {
    to: '/hercodekathon',
    link: 'Hercodekathon'
  },
  {
    to: '/sponsor',
    link: 'Sponsor/ win'
  },
  {
    to: '/programme',
    link: 'Programme'
  },
  {
    to: '/about',
    link: 'About us'
  },
]


const Navbar = () => {
  return (
    <nav className="bg-[#0A0F15]">
      <div className="w-full max-w-xl px-6 py-5 flex justify-between items-center mx-auto">
        <div>
          <img src={logo} alt="HerCode Logo" />
        </div>
        <div className="text-white flex items-center gap-x-4">
          {
            navDataLinks1.map((nvl, i) => (
              <NavLink key={i}
                to={nvl.to}
                className={({ isActive }) =>
                  isActive ? "text-[#D8BFD8]" : ""
                }
              >
                {nvl.link}
              </NavLink>
            ))
          }
          <div className="nav-item py-3">
            <div className="flex items-center gap-x-[1px] nav-item-title">
              <p>Success Stories</p><span className="material-icons"> expand_more </span>
            </div>
            <div className="nav-item-dropdown nav-items-dropdown-services">
              <div className="nav-item-dropdown-triangle"></div>
              <NavLink to="/success-stories-read" className={({ isActive }) =>
                  isActive ? "nav-item-dropdown-link text-[#D8BFD8]" : "nav-item-dropdown-link"
                }>
                Read Success Stories
              </NavLink>
              <NavLink to="/success-stories-videos" className={({ isActive }) =>
                  isActive ? "nav-item-dropdown-link text-[#D8BFD8]" : "nav-item-dropdown-link"
                }>
                Watch Success Stories
              </NavLink>
              <NavLink to="/events" className={({ isActive }) =>
                  isActive ? "nav-item-dropdown-link text-[#D8BFD8]" : "nav-item-dropdown-link"
                }>
                Events
              </NavLink>
            </div>
          </div>
          {
            navDataLinks2.map((nvl, i) => (
              <NavLink key={i}
                to={nvl.to}
                className={({ isActive }) =>
                  isActive ? "text-[#D8BFD8]" : ""
                }
              >
                {nvl.link}
              </NavLink>
            ))
          }
        </div>
        <div>
          <Button>Connect</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar