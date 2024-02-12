import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>

      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
          <Link href='/'>
             <Image
            src='/jsm-logo.svg'
            alt='logo'
            width={55}
            height={40}
             />
          </Link>
          <Image 
          src='/hamburger-menu.svg'
          width={30}
          height={30}
          alt='Hamburger-menu'
          className='block md:hidden cursor-pointer'
          />

          <ul className='flex-center gap-3 max-md:hidden md:gap-x-10'>
           <li className='body-text text-gradient_blue-purple font-bold text'>
            <Link 
            href='https://jsmastery.pro/next13'
            target='_blank'
            >
             Nextjs 13.4 Course
            </Link>
           </li>

           <li className='body-text font-normal text'>
            <Link 
            href='https://jsmastery.pro/masterclass'
            target='_blank'
            >
             Masterclass
            </Link>
           </li>
          </ul>
      </div>
       
    </nav>
  )
}

export default Navbar
