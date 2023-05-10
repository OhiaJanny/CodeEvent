import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import wo14 from '../assets/wo14.png'

const Events = () => {
    return (
        <>
            <Navbar />

            <section className="bg-dark py-[8rem] earth-image-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="mb-32">
                        <h1 className="text-[40px] text-white font-bold text-center">Events</h1>
                    </header>

                    <section className="py-[5rem]">
                        <div className="bg-darklight py-20 px-10 rounded-xl">
                            <header className="text-center text-white mb-10">
                                <h1 className="text-[40px] mb-4 font-bold">Latest Events</h1>
                                <p className="opacity-80 text-[20px] font-semibold">All events in one place</p>
                            </header>
                            <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-16 max-w-[60rem] mx-auto">

                                {
                                    [0, 1, 2, 3, 4, 5].map((_, i) => (
                                        <div className="max-w-[20rem] pb-10" key={i}>
                                            <figure>
                                                <img src={wo14} alt="UK women submit" />
                                            </figure>
                                            <figcaption className="pt-3 text-white">
                                                <h1 className="font-bold">UK Women Submit</h1>
                                                <p className="text-[15px] mt-1 mb-2 opacity-80 font-semibold">Wed 3rd April 2023, 9:00 AM</p>
                                                <a className="underline mt-2">See more</a>
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

export default Events