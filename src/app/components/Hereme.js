export default function Hireme(){
    return (
        <section className="px-12 py-4 bg-[#695AA6]">
          <div className="container mx-auto text-center sm:text-left flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Column */}
            <div className="mb-6 md:mb-0">
              <h6 className="text-light font-semibold text-2xl">Want to work with me?</h6>
              <p className="m-0 text-gray-200">Always feel free to contact & hire me</p>
            </div>
    
            {/* Right Column */}
            <div>
              <button className="btn bg-white text-[#695AA6] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                <a className="no-underline" href="#contact">Hire Me</a>
              </button>
            </div>
    
          </div>
        </section>
      )
}