import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import join from '../assets/join.png'
import join1 from '../assets/join1.png'
import Button from "../components/Button"
import light from '../assets/li.png'
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import sponsor_rect from '../assets/Rectangle 1114.svg'

const Sponsor = () => {
    return (
        <>
            <Navbar />

            <section className="bg-dark py-[8rem] earth-image-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="max-w-[40rem] mx-auto mb-32">
                        <h1 className="text-[40px] text-white font-bold text-center">Sponsor/Win</h1>
                    </header>
                    <div>
                        <div className="flex gap-x-2 justify-between p-10 bg-[#22252C] rounded-xl mx-auto max-w-fit">
                            <figure className='max-w-[223px] w-full'>
                                <img src={join1} alt="Join Her Code Community" />
                            </figure>
                            <div className="text-white text-center w-full max-w-[33rem]">
                                <h1 className="text-[32px] font-bold">HSE Laptop scholarship </h1>
                                <p className="text-[20px] opacity-80 my-5">We are fast in growing our community. Join us on slack, discord, Telegram  and follow us on our socials to stay updated</p>
                                <Button>Connect</Button>
                            </div>
                            <figure className='max-w-[223px] w-full'>
                                <img src={join} alt="We are fast in growing our community" />
                            </figure>
                        </div>
                    </div>

                    <div className="py-[8rem]">
                        <header>
                            <h1 className="text-white text-center text-[30px] font-bold">Our Sponsors</h1>
                        </header>
                        <div className="max-w-fit mx-auto mt-10 flex gap-x-5">
                            <img src={sponsor_rect} alt="Sponsor Rect"/>
                            <img src={sponsor_rect} alt="Sponsor Rect"/>
                            <img src={sponsor_rect} alt="Sponsor Rect"/>
                        </div>
                    </div>

                    <div className="py-[5rem]">
                        <div className="p-20 bg-[#22252C] rounded-xl mx-auto max-w-fit">
                            <header className="mb-10">
                                <h1 className="text-white text-center text-[30px] font-bold">Sponsor her code events</h1>
                            </header>
                            <div className="flex gap-x-6">
                                <div className="bg-dark p-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                                    <figure className="grid place-items-center">
                                        <img src={light} alt="Light bulb" />
                                        <h2 className="font-bold mt-1 text-[20px]">Individual</h2>
                                    </figure>
                                    <figcaption>
                                        <p>To encourage more women
                                            in tech by reaching out to
                                            all women in the world.</p>
                                    </figcaption>
                                    <div><Button>Apply</Button></div>
                                </div>
                                <div className="bg-dark p-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                                    <figure className="grid place-items-center">
                                        <img src={v1} alt="Light bulb" />
                                        <h2 className="font-bold mt-1 text-[20px]">Individual</h2>
                                    </figure>
                                    <figcaption>
                                        <p>To encourage more women
                                            in tech by reaching out to
                                            all women in the world.</p>
                                    </figcaption>
                                    <div><Button>Apply</Button></div>
                                </div>
                                <div className="bg-dark p-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                                    <figure className="grid place-items-center">
                                        <img src={v2} alt="Light bulb" />
                                        <h2 className="font-bold mt-1 text-[20px]">Individual</h2>
                                    </figure>
                                    <figcaption>
                                        <p>To encourage more women
                                            in tech by reaching out to
                                            all women in the world.</p>
                                    </figcaption>
                                    <div><Button>Apply</Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Sponsor