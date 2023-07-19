import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import blog_img from '../assets/blog-img.svg'
import blog_article_img from '../assets/blog-article-img.svg'

const Blog = () => {
  return (
    <>
    <Navbar />
      <section className="bg-dark py-[8rem]">
        <div className="max-w-xl mx-auto px-6">
          <header className="max-w-[42rem] mx-auto mb-10">
            <h1 className="text-[40px] text-white font-bold text-center">Blog</h1>
          </header>
          <section className="py-[5rem]">
            <div className="bg-[#22252C] text-white rounded-xl p-10 max-w-[70rem] mx-auto flex gap-x-5 justify-between">
              <div className="max-w-[35rem] pt-20">
                <h1 className="text-[40px] font-bold">Get on Our Exciting Articles</h1>
                <p className="opacity-80 text-[22px] my-5">We are  reaching out interested individuals  especially ladies to read interesting articles
and get started with their careers</p>
              </div>
              <figure>
                <img src={blog_img} alt="We offer free coaching session
twice a week"/>
              </figure>
            </div>
          </section>

          <section className='max-w-[1240px] mx-auto'>
            <header className='pb-24 pt-10'>
                <h1 className='text-center text-white font-bold text-[40px]'>Our Featured Articles</h1>
            </header>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10'>
                {
                    [...Array(9)].map((_, i)=>(
                        <div key={i} className='max-w-[405px] mx-auto'>
                            <figure>
                                <img src={blog_article_img} alt="Blog Article"/>
                            </figure>
                            <div className='p-4 text-white bg-primary'>
                                <div className='pb-5'>
                                    <p>Topic • 24 March 2022</p>
                                    <h1 className='text-[20px] pt-[1px] font-semibold'>Featured Article Name</h1>
                                </div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
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

export default Blog