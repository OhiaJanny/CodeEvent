import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import not_found_img from '../assets/page_not_found.svg'

const PageNotFound = () => {
    
  return (
    <>
            <Navbar />
            <main className='grid place-items-center px-4 sm:px-6 bg-dark py-[10rem]'>
                <figure>
                    <img src={not_found_img} alt="Page Note Found" className='w-full max-w-[500px]' />
                    <figcaption className='text-center text-[24px] md:text-[32px] pt-20 text-white'>Oooops! Page not found</figcaption>
                </figure>
            </main>
            <Footer/>
        </>
  )
}

export default PageNotFound