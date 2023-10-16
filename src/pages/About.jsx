import Button from "../components/Button"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import bt from '../assets/bt.svg'
import dep from '../assets/dep.png'
import tm1 from '../assets/tm1.webp'
import tm2 from '../assets/tm2.webp'
import tm3 from '../assets/tm3.webp'
import tm4 from '../assets/tm4.webp'
import tm5 from '../assets/tm5.webp'
import tm6 from '../assets/tm6.webp'
import val1 from '../assets/val1.svg'
import val2 from '../assets/val2.svg'
import val3 from '../assets/val3.svg'
import val4 from '../assets/val4.svg'
import val5 from '../assets/val5.svg'
import val6 from '../assets/val6.svg'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Difference />
            <Values/>
            <Expertise />
            <Team />
            <Footer />
        </>
    )
}

export default Home

const Hero = () => {

    return (
        <header className="bg-dark py-[8rem] px-6 home-hero-bg">
            <section className="pb-[5rem]">
                <h1 className="text-center text-white text-[40px] font-bold">About Us</h1>
            </section>
            <section className="py-[5rem]">
                <div className="bg-[#22252C] text-white rounded-xl p-10 max-w-[70rem] mx-auto flex gap-x-2 justify-between">
                    <div className="max-w-[40rem]">
                        <h1 className="text-[40px] font-bold">Her Code Events and Bootcamps</h1>
                        <p className="opacity-80 text-[22px] my-8">We live to encourage more women in tech through events, Bootcamp, coaching and lots more. </p>
                        <Button>Connect</Button>
                    </div>
                    <figure>
                        <img src={bt} alt="We offer free coaching session
twice a week"/>
                    </figure>
                </div>
            </section>
        </header>
    )
}

const Difference = () => {

    return (
        <section className="py-[5rem] bg-dark">
            <header className="mb-10">
                <h1 className="text-center text-[40px] font-bold text-white">Why Are We Different?</h1>
            </header>
            <section className="mx-auto w-full text-white flex gap-x-2 justify-between max-w-[70rem] bg-[#22252C] rounded-[30px] py-20 px-10">
                <div className="max-w-[300px] flex flex-col justify-between">
                    <h1 className="mb-10 font-bold text-[19px]">We are not afraid to try something new</h1>
                    <p>Events and Bootcamp content can often
                        get repetitive. We constantly experiment
                        with new ideas and encourage creativity
                        in our programs</p>
                </div>
                <div className="max-w-[300px] flex flex-col justify-between">
                    <h1 className="mb-10 font-bold text-[19px]">We follow a strategic
                        process</h1>
                    <p>Bootcamps and coaching are  great,
                        but what impact does it make ? Our
                        coaching process incorporates follow
                        up which are often ignored.</p>
                </div>
                <div className="max-w-[300px] flex flex-col justify-between">
                    <h1 className="mb-10 font-bold text-[19px]">We work with you to find
                        solutions</h1>
                    <p>We are inspired by what we  want to
                        achieve and consistently work with
                        partners/sponsors at every step to
                        find the best solutions.</p>
                </div>
            </section>
        </section>
    )
}


const Expertise = () => {

    return (
        <section className="bg-dark py-[5rem] px-6">
            <div>
                <header className="mb-16">
                    <h1 className="text-[40px] text-white text-center font-bold">What <span className="text-primary">Her Code Event</span> Offers</h1>
                </header>
                <div className="max-w-fit mx-auto flex gap-x-20">
                    <div className="flex flex-col justify-between">
                        <div className="text-white text-center bg-[#22252C] rounded-md px-4 py-2 max-w-[14rem] w-full">
                            <h2 className="font-semibold text-[18px] mb-1">Community</h2>
                            <p className="opacity-80 text-[15px]">20,0000 community members</p>
                        </div>
                        <div className="translate-x-16 text-white text-center bg-[#22252C] rounded-md px-4 py-2 max-w-[14rem] w-full">
                            <h2 className="font-semibold text-[18px] mb-1">Bootcamp</h2>
                            <p className="opacity-80 text-[15px]">500 female bootcamp
                                graduates.</p>
                        </div>
                        <div className="text-white text-center bg-[#22252C] rounded-md px-4 py-2 max-w-[14rem] w-full">
                            <h2 className="font-semibold text-[18px] mb-1">Tools</h2>
                            <p className="opacity-80 text-[15px]">Free Laptops and
                                Wi-Fi</p>
                        </div>
                    </div>
                    <figure>
                        <img src={dep} alt="Dep" />
                    </figure>
                    <div className="flex flex-col h-[17rem] mt-auto justify-between">
                        <div className="translate-x-[-4rem] text-white text-center bg-[#22252C] rounded-md px-4 py-2 max-w-[14rem] w-full">
                            <h2 className="font-semibold text-[18px] mb-1">Work Stations</h2>
                            <p className="opacity-80 text-[15px]">50 work stations</p>
                        </div>
                        <div className="text-white text-center bg-[#22252C] rounded-md px-4 py-2 max-w-[14rem] w-full">
                            <h2 className="font-semibold text-[18px] mb-1">Events</h2>
                            <p className="opacity-80 text-[15px]">50 successful events</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const valuesData = [
    {
        title:'Teamwork',
        img:val1,
    },
    {
        title:'Coaching',
        img:val2,
    },
    {
        title:'Focus',
        img:val3,
    },
    {
        title:'Audience',
        img:val4,
    },
    {
        title:'Growth',
        img:val5,
    },
    {
        title:'Leadership',
        img:val6,
    },
]

const Values= () =>{

    return (
        <section className="py-[5rem] bg-dark">
            <header className="mb-10">
                <h1 className="text-center text-[40px] font-bold text-white">Our Values</h1>
            </header>
            <div className="flex">
                    <div className="w-full max-w-[65rem] grid grid-cols-3 gap-y-8 gap-x-8 mx-auto">
                        {
                            valuesData.map((vd, i) => (
                                <div key={i} className="grid place-items-center">
                                    <figure className="bg-white w-[288px] h-[223px] rounded-[17px] overflow-hidden grid place-items-center">
                                        <h1 className="text-[25px] font-bold">{vd.title}</h1>
                                        <img src={vd.img} alt="Team" />
                                        <div className="h-[25px] bg-[#22252C] w-full self-end"></div>
                                    </figure>
                                </div>

                            ))
                        }
                    </div>
                </div>
        </section>
    )
}

const Team = () => {

    return (
        <div className="py-[8rem] bg-dark">
            <section>
                <header className="pb-12">
                    <h1 className="text-[40px] font-bold text-center text-white">Meet our Team</h1>
                </header>
                <div className="flex">
                    <div className="w-full max-w-[65rem] grid grid-cols-3 gap-y-8 gap-x-8 mx-auto">
                        {
                            [tm1, tm2, tm3, tm4, tm5, tm6].map((pic, i) => (
                                <div key={i} className="grid place-items-center">
                                    <figure className="relative w-[288px] border-primary border-[1px] h-[223px] rounded-[17px] overflow-hidden">
                                        <img src={pic} alt="Team" />
                                        <figcaption className="absolute bottom-0 object-cover bg-primary w-full px-3 py-1">
                                            <h1 className="text-white font-bold text-[19px]">Jane Doe</h1>
                                            <p className="text-[#032A5E]">Cofounder</p>
                                        </figcaption>
                                    </figure>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="flex">
                <div className="mt-32 mx-auto max-w-[35rem] w-full">
                    <h2 className="text-center text-white font-bold text-[18px]">Subscribe to our daily digest</h2>
                    <form className="flex gap-x-2 mt-5">
                        <input className="h-[45px] w-full rounded-l-md bg-[#22252C] px-4 py-1" placeholder="Enter Your Email Address" />
                        <Button className="rounded-l-none">Submit</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}