import Image from "next/image";
import Logo from "@/assets/Scopee.png";
export const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
     
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm">
        <p className="flex items-center gap-2">
          <a href ="#" >🚀 Sign up for beta testing! </a>
          <svg
            className="h-4 w-4 animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2L10.59 3.41 17.17 10H2v2h15.17l-6.58 6.59L12 22l10-10z" />
          </svg>
        </p>
      </div>

     
      <div className="py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href ="#" ><Image src={Logo} alt="Scope AI Logo" height={100} width={100} />
            </a>
            <nav className="hidden md:flex gap-8 items-center text-gray-700">
              <a href="#" className="text-sm font-medium hover:text-black transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium hover:text-black transition-colors">
                Features
              </a>
              <a href="#" className="text-sm font-medium hover:text-black transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium hover:text-black transition-colors">
                Contact
              </a>
              <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all">
                Get started
              </button>
            </nav>

            <button className="md:hidden flex items-center text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
