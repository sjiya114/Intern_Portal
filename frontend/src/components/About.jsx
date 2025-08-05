import aboutimage from '../assets/reward5.png';
function About() {
  return (
    <div id='about' className='mt-20 px-10 py-10 rounded-lg max-w-screen-xl hover:scale-110  mx-auto  flex flex-row max-md:flex-col justify-center items-center'>
      <div className='w-1/2 max-md:w-full flex flex-row items-center justify-center space-x-4'  >
       <img src={aboutimage} alt="image2" className='w-100 h-100 max-md:w-fit h-fit rounded-lg' />
    </div>
      <div className='w-1/2 px-6  max-md:w-full  text-white '>
        <h1  className='font-bold text-3xl max-md:mt-6  '  >About Us</h1>
        <p className='pt-4 font-normal  tracking-wide'>InterWala is a dynamic platform designed to bridge the gap between passionate interns and impactful fundraising opportunities. Built with a vision to empower youth while supporting social causes, InterWala connects students, volunteers, and changemakers with NGOs, social enterprises, and community projects that need visibility and funding.</p>
        <p className='pt-2 font-normal tracking-wide'>Our portal offers a hands-on internship experience where individuals can learn, grow, and contribute meaningfully by raising funds, spreading awareness, and supporting missions that matter. Whether you're looking to earn certificates, rewards, or simply make a difference, InterWala gives you the tools, guidance, and community to succeed.</p>
        <p className='pt-2 font-normal  tracking-wide'>We believe in the power of youth, technology, and purpose-driven work. Join us in building a future where every intern can be a catalyst for change.</p>
      </div>
    </div>
    
  )
}
export default About;