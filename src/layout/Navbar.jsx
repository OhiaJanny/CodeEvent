import logo from '../assets/logo.png'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'


const navLinksData = [
  {
    to: '/',
    link: 'Home',
    isDropdown: false
  },
  {
    to: '/coaching',
    link: 'Coaching',
    isDropdown: false
  },
  {
    link: 'Success Stories',
    isDropdown: true,
    dropdown: [
      {
        to: '/success-stories-read',
        link: 'Read Success Stories',
      },
      {
        to: '/success-stories-videos',
        link: 'Watch Success Stories',
      },
    ]
  },
  {
    to: '/hercodekathon',
    link: 'Hercodekathon',
    isDropdown: false
  },
  {
    to: '/sponsor',
    link: 'Sponsor/ win',
    isDropdown: false,
  },
  {
    link: 'Programme',
    isDropdown: true,
    dropdown: [
      {
        to: '/programme',
        link: 'Bootcamps',
      },
      {
        to: '/events',
        link: 'Events',
      },
      {
        to: '/parent-submit',
        link: 'Parent Submits',
      },
    ]
  },
  {
    to: '/about',
    link: 'About us',
    isDropdown: false,
  },
]



const Navbar = () => {
  return (
    <nav className="bg-[#0A0F15]">
      <div className="w-full max-w-xl px-6 py-5 flex justify-between items-center mx-auto">
        <div>
          <img src={logo} alt="HerCode Logo" />
        </div>
        <div className="text-white flex items-center gap-x-3">
          {
            navLinksData.map((nvl, i) => (
              nvl.isDropdown ?
                <div className="nav-item py-3" key={i}>
                  <div className="flex items-center gap-x-[1px] nav-item-title">
                    <p>{nvl.link}</p><span className="material-icons"> expand_more </span>
                  </div>
                  <div className="nav-item-dropdown nav-items-dropdown-services">
                    <div className="nav-item-dropdown-triangle"></div>
                    {
                      nvl.dropdown.map((_nvl, j) => (
                        <NavLink key={j} to={_nvl.to} className={({ isActive }) =>
                          isActive ? "nav-item-dropdown-link text-[#D8BFD8]" : "nav-item-dropdown-link"
                        }>
                          {_nvl.link}
                        </NavLink>
                      ))
                    }
                  </div>
                </div>
                :
                <NavLink key={i}
                  to={nvl.to}
                  className={({ isActive }) =>
                    isActive ? "text-[#D8BFD8]" : "hover:text-[#D8BFD8]"
                  }
                >
                  {nvl.link}
                </NavLink>
            ))
          }
        </div>
        <div className='flex items-center gap-x-4'>
          <Button>Connect</Button>
          <span className='material-icons text-white'>menu</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar