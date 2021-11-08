import Link from 'next/link'
import { useEffect } from "react";

const Navbar: React.FC<{active?: string}> = ({ active }) => {
  const changePosition = () => {
    const nav = document.querySelector(".nav") 
    const link = document.querySelectorAll(".linkto") 
    
    window.scrollY <= 50 ? (
      nav?.classList.remove("shadow-xl"),
      nav?.classList.remove("bg-white"),
      nav?.classList.add("bg-transparent"),

      link.forEach((link) => {
        link.classList.remove("text-gray-500"),
        link.classList.remove("text-indigo-500"),
        link.classList.add("text-white")
      })
    ) : (
      nav?.classList.add("shadow-xl"),
      nav?.classList.add("bg-white"),
      nav?.classList.remove("bg-transparent"),
      
      link.forEach((link) => {
        link.classList.add("text-gray-500"),
        link.classList.add("text-indigo-500"),
        link.classList.remove("text-white")
      })
    )
  }

  let classActive = 'text-md no-underline text-indigo-500 hover:text-indigo-500 ml-2 px-1'
  let defaultClass = 'text-md no-underline text-gray-500 hover:text-indigo-500 ml-2 px-1'

  useEffect(() => {
    // window.addEventListener('scroll', changePosition)
  });

  return (
    <nav className="z-20 font-sans text-center bg-white py-2 sm:items-baseline w-full nav animated">
      <div className="container mx-auto px-10 flex flex-col content-center sm:flex-row sm:text-left sm:justify-between">  
        <div className="mb-2 sm:mb-0 inner">
          <Link href="/">
            <a className="text-2xl no-underline text-grey-darkest hover:text-indigo-500 font-sans font-bold">Lutfi Alamsyah</a>
          </Link>
          <br/>
          <span className="text-xs text-indigo-500">Software engineer</span>
        </div>

        <div className="sm:mb-0 self-center">
          <Link href="/about">
            <a className={`linkto ${active == 'about' ? classActive : defaultClass}`}>About me</a>
          </Link>
          <Link href="#portfolio">
            <a className={`linkto ${active == 'portfolio' ? classActive : defaultClass}`}>Portofolio</a>
          </Link>
          <Link href="/certificate">
            <a className={`linkto ${active == 'certificate' ? classActive : defaultClass}`}>Certification</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;