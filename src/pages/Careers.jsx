import Button from "../components/Button"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import careers_img from '../assets/careers_img.svg'
import 'swiper/css';

const Careers = () => {



    return (
        <>
            <Navbar />
            <section className="bg-dark py-[8rem] earth-image-bg">
                <div className="max-w-xl mx-auto px-6">
                    <header className="max-w-[48rem] mx-auto mb-20">
                        <h1 className="text-[40px] text-white font-bold text-center">Careers</h1>
                    </header>

                    <section className="py-[5rem]">
                        <div className="bg-[#22252C] text-white rounded-xl p-10 max-w-[60rem] mx-auto flex gap-x-5 justify-between">
                            <div className="max-w-[30rem] pt-10">
                                <h1 className="text-[40px] font-bold">Join Our Team</h1>
                                <p className="opacity-80 text-[22px] my-8">We are  reaching out to skilled individuals especially ladies to join our team</p>
                            </div>
                            <figure>
                                <img src={careers_img} alt="We are  reaching out to skilled individuals especially ladies to join our team" />
                            </figure>
                        </div>
                    </section>

                    <section className="py-[5rem]">
                        <header className="mb-20">
                            <h1 className="text-center text-[40px] font-bold text-white">Available Roles</h1>
                        </header>
                        <div className='w-full max-w-[768px] mx-auto flex flex-col gap-y-20'>
                            {
                                [...Array(7)].map((_, i) => (
                                    <div key={i} className='flex justify-between'>
                                        <div className='text-white'>
                                            <h1 className='font-bold text-[24px] md:text-[32px] mb-4'>Product Designer</h1>
                                            <h2 className='md:text-[20px]'>Posted today</h2>
                                        </div>
                                        <div>
                                            <Button>Apply</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Careers