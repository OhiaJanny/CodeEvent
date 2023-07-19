import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import faqs from '../assets/faqs.svg'

const Faqs = () => {
  return (
    <>
            <Navbar />
            <main className='px-4 sm:px-6 bg-dark pt-[5rem] pb-[14rem]'>
                <div className='max-w-[800px] mx-auto grid place-items-center'>
                    <header className='pt-10'>
                        <figure>
                            <h1 className='text-center text-[24px] md:text-[32px] pb-12 text-white font-bold'>FAQs</h1>
                            <img src={faqs} alt="Frequently Asked Questions" className='w-full max-w-[429px]' />
                        </figure>
                    </header>
                </div>
            </main>
            <Footer />
        </>
  )
}

export default Faqs