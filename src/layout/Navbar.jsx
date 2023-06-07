import logo from '../assets/logo.png'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'


const navDataLinks = [
  {
    to: '/',
    link: 'Home'
  },
  {
    to: '/coaching',
    link: 'Coaching'
  },
  {
    to: '/success-stories-videos',
    link: 'Success Stories'
  },
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
      <div className="w-full max-w-xl px-6 py-4 flex justify-between items-center mx-auto">
        <div>
          <img src={logo} alt="HerCode Logo" />
        </div>
        <div className="text-white flex items-center gap-x-4">
          {
            navDataLinks.map((nvl, i) => (
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