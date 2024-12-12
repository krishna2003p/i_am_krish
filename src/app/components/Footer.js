// components/Footer.js

const Footer = () => {
    return (
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <footer className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <p className="mb-4 md:mb-0">
              Copyright &copy; {new Date().getFullYear()} KRISHNA PRAJAPATI
            </p>
  
            {/* Social Links */}
            <div className="flex space-x-4 mt-2 md:mt-0">
              {["facebook", "twitter", "google", "pinterest", "instagram", "rss"].map((social) => (
                <a
                  key={social}
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-3xl"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
  
          </footer>
        </div>
      </div>
    );
  };
  
  export default Footer;
  