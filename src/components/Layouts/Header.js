import { Link } from "react-router-dom";
import Logo from "../download.png";
import { useEffect, useState,useRef } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { useCart } from "../../context";

export const Header = () => {

  const[searchbar,setSearchbar]=useState(false);

  const [darkmode, setDarkmode] = useState(() => {
    try {
      const storedMode = JSON.parse(localStorage.getItem("darkmode"));
      return storedMode !== null ? storedMode : false;
    } catch (e) {
      return false;
    }
  });

  const [dropdown,Setdropdown]=useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Save dark mode preference in localStorage
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  
    // Add or remove the 'dark' class on the document based on darkmode state
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  
    // Function to handle click outside of the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        Setdropdown(false);
      }
    }
  
    // Add event listener for clicks outside dropdown when dropdown is open
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    // Cleanup the event listener on component unmount or when dropdown closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [darkmode, dropdown]);  // Dependencies are darkmode and dropdown states
  

  const {cartList}=useCart()

  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="e-book Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EbookEngine</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={()=>setDarkmode(!darkmode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={()=>setSearchbar(!searchbar)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
              </span>                    
            </Link>
            <span onClick={() => Setdropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {dropdown && (
              <div ref={dropdownRef}>
                {token ? <DropdownLoggedIn Setdropdown={Setdropdown}/> : <DropdownLoggedOut Setdropdown={Setdropdown}/>}
              </div>
            )}
          </div>
        </div>
      </nav>
      {searchbar && <Search setSearchbar={setSearchbar}/>}
    </header>
  )
}