import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import coachimg from '../assets/Layer 1.svg'
import Button from "../components/Button"
import jane from '../assets/Ellipse 16.svg'
import topic from '../assets/topic.svg'
import venue from '../assets/venue.svg'
import time from '../assets/time.svg'

const Coaching = () => {
  return (
    <>
      <Navbar />

      <section className="bg-dark py-[8rem] earth-image-bg">
        <div className="max-w-xl mx-auto px-6">
          <header className="max-w-[42rem] mx-auto mb-10">
            <h1 className="text-[40px] text-white font-bold text-center">We offer free coaching session
              twice a week</h1>
          </header>

          <section className="py-[5rem]">
            <div className="bg-[#22252C] text-white rounded-xl p-10 max-w-[60rem] mx-auto flex gap-x-5 justify-between">
              <div className="max-w-[25rem]">
                <h1 className="text-[40px] font-bold">Mentorship</h1>
                <p className="opacity-80 text-[22px] my-5">Sign up for a one-on-one mentorship
                  with senior tech leaders</p>
                <Button>Apply</Button>
              </div>
              <figure>
                <img src={coachimg} alt="We offer free coaching session
twice a week"/>
              </figure>
            </div>
          </section>

          <section className="py-[5rem]">
            <div className="text-white max-w-[60rem] mx-auto flex gap-x-10">
              <div className="bg-[#22252C] p-10 rounded-xl w-full max-w-[30rem]">
                <h1 className="text-[32px] font-bold">Wednesday gist</h1>
                <p className="opacity-80 max-w-[18rem] mt-3 text-[20px]">Description of event held every wednesday </p>
                <div className="mt-8 flex gap-x-5 items-center">
                  <div>
                    <img src={jane} alt="Hercode" />
                  </div>
                  <div className="opacity-80 font-bold border-white border-b-[1px] border-[#aaa] pb-3 w-full">
                    <h2>Meflyn Anwana</h2>
                    <p className="italic">Product Manager, Ekash</p>
                  </div>
                </div>
                <div className="pl-10">
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={topic} alt="Topic" /><span>Topic: Career Paths</span></div>
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={venue} alt="Venue" /><span>Venue: Zoom</span></div>
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={time} alt="Time" /><span>Time: 2pm</span></div>
                  <Button className="mt-5 px-16">Join</Button>
                </div>
              </div>
              <div className="bg-[#22252C] p-10 rounded-xl w-full max-w-[30rem]">
                <h1 className="text-[32px] font-bold">Wednesday gist</h1>
                <p className="opacity-80 max-w-[18rem] mt-3 text-[20px]">Description of event held every wednesday </p>
                <div className="mt-8 flex gap-x-5 items-center">
                  <div>
                    <img src={jane} alt="Hercode" />
                  </div>
                  <div className="opacity-80 font-bold border-white border-b-[1px] border-[#aaa] pb-3 w-full">
                    <h2>Meflyn Anwana</h2>
                    <p className="italic">Product Manager, Ekash</p>
                  </div>
                </div>
                <div className="pl-10">
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={topic} alt="Topic" /><span>Topic: Career Paths</span></div>
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={venue} alt="Venue" /><span>Venue: Zoom</span></div>
                  <div className="mt-4 flex gap-x-5 opacity-80"><img src={time} alt="Time" /><span>Time: 2pm</span></div>
                  <Button className="mt-5 px-16">Join</Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-[5rem] grid place-items-center text-white gap-y-8 text-center">
            <h1 className="text-[40px] font-bold">Volunteer</h1>
            <p className="text-[22px] opacity-80">Want to be a speaker for one of our events or offer as a coach?</p>
            <Button className="px-14">Apply</Button>
          </section>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Coaching