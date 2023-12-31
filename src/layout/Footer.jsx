import logo from '../assets/logo.png'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import tt from '../assets/tt.svg'
import pt from '../assets/pt.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#22252C]">
      <div className="py-[5rem] max-w-[1500px] px-6 flex gap-x-20 justify-between">
        <div>
          <figure><img src={logo} alt="HerCode Logo" /></figure>
          <figure className="flex gap-x-2 max-w-fit pt-4">
            <img src={fb} alt="Facebook Icon" />
            <img src={ig} alt="Instagram Icon" />
            <img src={tt} alt="Twitter Icon" />
            <img src={pt} alt="Pinterest Icon" />
          </figure>
        </div>
        <div className="flex gap-x-5 w-full max-w-[50rem] justify-between">
          <div className="text-white flex flex-col gap-y-4 text-[15px] max-w-[12rem]">
            <h2 className="font-bold text-[19px]">Office</h2>
            <p>HerCodeEvents, floor ABC Place, Lagos, Nigeria.</p>
            <a href="tel:+234 70 5040432">+234 70 5040432</a>
          </div>
          <div className="text-white flex flex-col gap-y-4 text-[15px] max-w-[12rem]">
            <h2 className="font-bold text-[19px]">Company</h2>
            <Link to="/about">About</Link>
            <Link to="/success-stories-read">Success Stories</Link>
            <Link to="/parent-submit">Parent Submit</Link>
            <Link to='/careers'>Careers</Link>
          </div>
          <div className="text-white flex flex-col gap-y-4 text-[15px] max-w-[12rem]">
            <h2 className="font-bold text-[19px]">Events</h2>
            <Link to="/hercodekathon">Hercodekathon</Link>
            <a href="#">WTC</a>
            <Link to="/parent-submit">Parent Submit</Link>
          </div>
          <div className="text-white flex flex-col gap-y-4 text-[15px] max-w-[12rem]">
            <h2 className="font-bold text-[19px]">Helps</h2>
            <Link to="/faqs">FAQs</Link>
            <Link to="/terms">Privacy Policy</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </div>
      </div>
      <div className="px-6 text-white text-center py-5 bg-dark">
        <p>All right reserved. Her Code Event 2023 </p>
      </div>
    </footer>
  )
}

export default Footer