import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import vid_bg from '../assets/Frame 22.svg'
const SuccessStoriesVideos = () => {
    return (
        <>
            <Navbar />

            <section className="bg-dark py-[8rem] success-stories-vids-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="max-w-[40rem] mx-auto mb-20">
                        <h1 className="text-[40px] text-white font-bold text-center">Successful stories from
participants to stir you up</h1>
                    </header>
                    <div className="grid grid-cols-2 max-w-[60rem] mx-auto gap-x-10 gap-y-16">
                        <div>
                            <figure>
                                <img src={vid_bg} alt="Success stories"/>
                            </figure>
                            <figcaption className="text-white text-[20px] mt-3">
                                <p>Meet Audre Dakomi, a fresh graduate of 
University of Jos, </p>
                            </figcaption>
                        </div>
                        <div>
                            <figure>
                                <img src={vid_bg} alt="Success stories"/>
                            </figure>
                            <figcaption className="text-white text-[20px] mt-3">
                                <p>Meet Audre Dakomi, a fresh graduate of 
University of Jos, </p>
                            </figcaption>
                        </div>
                        <div>
                            <figure>
                                <img src={vid_bg} alt="Success stories"/>
                            </figure>
                            <figcaption className="text-white text-[20px] mt-3">
                                <p>Meet Audre Dakomi, a fresh graduate of 
University of Jos, </p>
                            </figcaption>
                        </div>
                        <div>
                            <figure>
                                <img src={vid_bg} alt="Success stories"/>
                            </figure>
                            <figcaption className="text-white text-[20px] mt-3">
                                <p>Meet Audre Dakomi, a fresh graduate of 
University of Jos, </p>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default SuccessStoriesVideos