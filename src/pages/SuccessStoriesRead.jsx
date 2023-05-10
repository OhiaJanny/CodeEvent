import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import pic_bg from '../assets/pic-bg.svg'
import Button from "../components/Button"

const SuccessStoriesRead = () => {
    return (
        <>
            <Navbar />

            <section className="bg-dark py-[8rem] earth-image-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="max-w-[40rem] mx-auto mb-20">
                        <h1 className="text-[40px] text-white font-bold text-center">Successful stories from
                            participants to stir you up</h1>
                    </header>
                    <section className="pb-[5rem] grid grid-cols-2 max-w-[60rem] mx-auto gap-x-10 gap-y-16">
                        {
                            [0, 1, 2, 3].map((_, i) => (
                                <div key={i}>
                                    <figure>
                                        <img src={pic_bg} alt="Success stories" />
                                    </figure>
                                    <figcaption className="text-white opacity-80 mt-3">
                                        <p className="text-[22px] mb-2 font-bold">Meet Audre Dakomi, a fresh graduate of
                                            University of Jos, </p>
                                        <p>Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, Meet Audre Dakomi, a fresh graduate of University of Jos, </p>

                                    </figcaption>
                                    <Button className="mt-8">Read more</Button>
                                </div>
                            ))
                        }
                    </section>

                    <section className="py-[5rem]">
                        <div className='text-white text-center grid place-items-center gap-y-5 max-w-[30rem] mx-auto'>
                            <h1 className="text-[40px] font-bold">Share your own success 
stories with us</h1>
                           
                            <Button>Share</Button>
                        </div>
                    </section>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default SuccessStoriesRead