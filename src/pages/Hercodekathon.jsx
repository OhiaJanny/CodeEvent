import Button from "../components/Button"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"

const Hercodekathon = () => {
    
    return (
        <>
            <Navbar />

            <section className="bg-dark py-[8rem] earth-image-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="max-w-[48rem] mx-auto mb-20">
                        <h1 className="text-[40px] text-white font-bold text-center">Her Code Event host Hercodekathon
                            events annually to encourage women
                            into tech</h1>
                    </header>

                    <section className="py-[5rem] max-w-fit flex gap-x-10 mx-auto">
                        <div className="bg-[#22252C] px-10 py-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                            <h1 className="text-[24px] font-bold">2022</h1>
                            <p>Hosted virtually and onsite
                                in Lagos, Nigeria</p>
                            <Button className="w-full">Apply</Button>
                        </div>
                        <div className="bg-[#22252C] px-10 py-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                            <h1 className="text-[24px] font-bold">2021</h1>
                            <p>Hosted virtually and onsite
                                in Lagos, Nigeria</p>
                            <Button className="w-full">Apply</Button>
                        </div>
                        <div className="bg-[#22252C] px-10 py-8 rounded-xl grid place-items-center gap-y-6 text-white max-w-[18rem] text-center">
                            <h1 className="text-[24px] font-bold">2020</h1>
                            <p>Hosted virtually and onsite
                                in Lagos, Nigeria</p>
                            <Button className="w-full">Apply</Button>
                        </div>
                    </section>

                    <section className="py-[5rem]">
                        <div className=" mx-auto max-w-[60rem] w-full p-10 bg-[#22252C] rounded-xl">
                            <div className='text-white text-center grid place-items-center gap-y-5 max-w-[28rem] mx-auto'>
                                <h1 className="text-[40px] font-bold">Hercodekathon 2023</h1>
                                <p className="opacity-80 text-[20px]">Hercodekathon holds every November.
                                    50 girls will be taken into a 4weeks coding event
                                    and winners will be awarded with prizes.</p>
                                <Button>Apply</Button>
                            </div>
                            <div className="text-white text-center mt-12 mb-2 max-w-[32rem] mx-auto">
                                <p className="font-semibold">Want us to notify you when HCE is commencing?</p>
                                <form className="flex gap-x-2 my-5">
                                    <input className="h-[45px] w-full rounded-l-md bg-dark px-4 py-1" placeholder="Enter Your Email Address" />
                                    <Button className="rounded-l-none">Submit</Button>
                                </form>
                                <a href="https://forms.gle/PLshAPqUrbSHQkxk6"  className="underline">Sponsor HSE</a>
                            </div>
                        </div>
                    </section>

                    <section className="py-[5rem]">
                        <div className='text-white text-center grid place-items-center gap-y-5 max-w-[28rem] mx-auto'>
                            <h1 className="text-[40px] font-bold">Hercodekathon 2023</h1>
                            <p className="opacity-80 text-[20px]">Interested in brainstorming with other techies?
                                Join our weekend coding challenge to upgrade
                                your skills</p>
                            <Button>Learn more</Button>
                        </div>
                    </section>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Hercodekathon