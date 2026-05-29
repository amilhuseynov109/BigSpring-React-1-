import { useState, useEffect, useRef ,} from 'react';
import { Link } from 'react-router'
import logo from '../../assets/logo.png'; 

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const lastFocusedElementRef = useRef(null);

   const openMenu = () => {
      lastFocusedElementRef.current = document.activeElement;
      setIsMenuOpen(true);

      
      setTimeout(() => {
         menuRef.current?.focus();
      }, 0);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);

    
      setTimeout(() => {
         lastFocusedElementRef.current?.focus();
      }, 0);
   };

   useEffect(() => {
      const handleEscapeKey = (e) => {
         if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
         }
      };

      document.addEventListener('keydown', handleEscapeKey);

      return () => {
         document.removeEventListener('keydown', handleEscapeKey);
      };
   }, [isMenuOpen]);

   return (
      <nav
         className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-[68px] relative z-20"
         aria-label="Main navigation "
      >
         <div className="md:max-w-[1100px] w-full md:mx-auto flex flex-wrap items-center justify-between md:gap-4 ">
            <Link
               to="/"
               className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
               <span className="sr-only">Your Company</span>
               <img
                  src={logo}
                  alt="readymadeui logo"
                  className="h-9 w-auto"
               />
            </Link>

            <div
               id="collapseMenu"
               ref={menuRef}
               tabIndex={-1}
               className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
            >
               <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
                  <Link
                     to="/"
                     onClick={closeMenu}
                     className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     <span className="sr-only">Your Company</span>
                     <img
                        src={logo}
                        alt="readymadeui logo dialog"
                        className="h-7 w-auto"
                     />
                  </Link>
                  <button type="button" aria-controls="collapseMenu"
                     onClick={closeMenu}
                     id="toggleClose"
                     className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     <span className="sr-only">Close main menu</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 fill-slate-900"
                        aria-hidden="true"
                        viewBox="0 0 329.269 329"
                     >
                        <path
                           d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                           data-original="#000000"
                        />
                     </svg>
                  </button>
               </div>

               <ul className="flex flex-col gap-8 font-semibold text-md text-slate-900 lg:flex-row max-lg:p-6">
                  <li>
                     <Link to={'/'} onClick={closeMenu}>
                        <span className="hover:text-[#0aa8a7] text-[#0aa8a7] focus:outline-none focus-visible:ring-2 rounded" aria-current="page">
                           Home
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link to={'/Blog'} onClick={closeMenu}>
                        <span className="hover:text-[#0aa8a7] focus:outline-none focus-visible:ring-2 rounded">
                           Blog
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link to={'/Pricing'} onClick={closeMenu}>
                        <span className="hover:text-[#0aa8a7] focus:outline-none focus-visible:ring-2 rounded">
                           Pricing
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link to={'/Contact'} onClick={closeMenu}>
                        <span className="hover:text-[#0aa8a7] focus:outline-none focus-visible:ring-2 rounded">
                           Contact
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link to={'/FAQ'} onClick={closeMenu}>
                        <span className="hover:text-[#0aa8a7] focus:outline-none focus-visible:ring-2 rounded">
                           FAQ
                        </span>
                     </Link>
                  </li>
               </ul>
            </div>

            <div className="flex items-center gap-4">
               <a
                  href="#"
                  className="hidden md:flex py-3 px-5 text-md rounded-3xl font-semibold cursor-pointer text-white border bg-[#0aa8a7] hover:scale-115 duration-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  Get Started
               </a>

               <button
                  type="button"
                  aria-controls="collapseMenu"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  id="toggleOpen"
                  onClick={openMenu}
                  className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="size-7 fill-slate-900"
                     aria-hidden="true"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
}