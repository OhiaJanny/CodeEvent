import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import faqs from '../assets/faqs.svg'
import Button from "../components/Button"

const Faqs = () => {
  return (
    <>
            <Navbar />
            <main className='px-4 sm:px-6 bg-dark pt-[5rem] pb-[14rem]'>
                <div className='max-w-[800px] w-full mx-auto grid place-items-center'>
                    <header className='pt-10 pb-20'>
                        <figure>
                            <h1 className='text-center text-[24px] md:text-[32px] pb-12 text-white font-bold'>FAQs</h1>
                            <img src={faqs} alt="Frequently Asked Questions" className='w-full max-w-[429px]' />
                        </figure>
                    </header>
                    <div className='w-full'>
                        <form className='flex w-full'>
                            <fieldset className='flex-1 bg-[#fff] px-3 flex items-center gap-x-3'>
                                <span className="material-icons text-[#aaa]"> search </span>
                                <input className='w-full outline-none' placeholder='Ask a question' />
                            </fieldset>
                            <Button className='rounded-none'>Search</Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
  )
}

export default Faqs