import Button from "../components/Button"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import parent_img from '../assets/parentsu-img.svg'
import wo14 from '../assets/wo14.png'
import pp_img from '../assets/pp-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const About = () => {


  const testimonialCard = (
    <div className="bg-darklight py-14 text-white px-10 max-w-[16rem] rounded-[4px]">
      <p className="text-center relative">
        <span className="top-[-26px] left-[-2px] absolute font-['Neuton'] text-[50px]">&ldquo;</span>
        I love creating new think every single days so let&rsquo;s do it together it was wonderful to work with you baby.
        <span className="absolute bottom-[-26px] rotate-180 font-['Neuton'] text-[50px]">&ldquo;</span>
      </p>
      <figure className="mt-10 flex gap-x-4 items-center">
        <img src={pp_img} alt="Profile" />
        <span className="opacity-80 font-semibold">- Taro Zizo</span>
      </figure>
    </div>
  )


  return (
    <>
      <Navbar />

      <section className="bg-dark py-[8rem] earth-image-bg">
        <div className="max-w-xl mx-auto px-6">
          <header className="max-w-[48rem] mx-auto mb-20">
            <h1 className="text-[40px] text-white font-bold text-center">Parent Submits</h1>
          </header>

          <section className="py-[5rem]">
            <div className="bg-[#22252C] text-white rounded-xl p-10 max-w-[60rem] mx-auto flex gap-x-5 justify-between">
              <div className="max-w-[30rem]">
                <h1 className="text-[40px] font-bold">Parent Submits</h1>
                <p className="opacity-80 text-[22px] my-8">We are also reaching out to our parents and guidance to encourage them to help their child/ward study tech courses.</p>
                <Button>Apply</Button>
              </div>
              <figure>
                <img src={parent_img} alt="We offer free coaching session
twice a week"/>
              </figure>
            </div>
          </section>

          <section className="py-[5rem]">
            <header className="mb-5">
              <h1 className="text-center text-[40px] font-bold text-white">Testimonials</h1>
            </header>
            <section className="mx-auto max-w-[70rem]">
              <Swiper
                spaceBetween={2}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                    <SwiperSlide key={i}>{testimonialCard}</SwiperSlide>
                  ))
                }
              </Swiper>
            </section>
          </section>

          <section className="py-[5rem]">
            <div className="bg-darklight py-20 px-10 rounded-xl">
              <header className="text-center text-white mb-10 mx-auto max-w-[40rem]">
                <h1 className="text-[40px] mb-4 font-bold">Upcoming Parent Submits</h1>
                <p className="opacity-80 text-[20px] font-semibold">We live to encourage more women in tech through events,
                  Bootcamp, coaching and lots more.  </p>
              </header>
              <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-16 max-w-[60rem] mx-auto">

                {
                  [0, 1, 2].map((_, i) => (
                    <div className="max-w-[20rem] pb-10" key={i}>
                      <figure>
                        <img src={wo14} alt="UK women submit" />
                      </figure>
                      <figcaption className="pt-3 text-white">
                        <h1 className="font-bold">UK Women Submit</h1>
                        <p className="text-[15px] mt-1 mb-2 opacity-80 font-semibold">Wed 3rd April 2023, 9:00 AM</p>
                        <Button className="mt-2">Apply</Button>
                      </figcaption>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default About