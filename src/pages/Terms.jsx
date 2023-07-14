import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import terms_img from '../assets/terms_and_ conditions.svg'

const Terms = () => {

    return (
        <>
            <Navbar />
            <main className='px-4 sm:px-6 bg-dark pt-[5rem] pb-[14rem]'>
                <div className='max-w-[1000px] mx-auto grid place-items-center'>
                    <header className=''>
                        <figure>
                            <h1 className='text-center text-[24px] md:text-[32px] pb-12 text-white font-bold'>Terms and Conditions</h1>
                            <img src={terms_img} alt="Terms and condition" className='w-full max-w-[429px]' />
                        </figure>
                    </header>
                    <section className='pt-24 text-white flex flex-col gap-y-20'>
                        <p>This AGREEMENT is BETWEEN: HerCode Event , a company registered under the  Non Profit Organization and Allied Matters Act 2023 with registered address at  Victoria Island, Eti-Osa 101233, Lagos that all the above listed information&rsquo;s are strictly for me and would be arrested if found incorrect.</p>
                        <p>HerCode Event is licensed by the Central Bank of Nigeria (“CBN”) to operate as an Non Profit Organization services to customers of partner banks in Nigeria. </p>
                        <p>I have read and understand that this terms and conditions are important that must have effect on me if applicable.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Terms