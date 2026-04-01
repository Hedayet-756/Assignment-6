import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import Link from './Link';

const navigationData = [
  {
    "id": 1,
    "name": "Products",
    "path": "/products"
  },
  {
    "id": 2,
    "name": "Features",
    "path": "/features"
  },
  {
    "id": 3,
    "name": "Pricing",
    "path": "/tricing"
  },
  {
    "id": 4,
    "name": "Testimonials",
    "path": "/testimonials"
  },
  {
    "id": 5,
    "name": "FAQ",
    "path": "/faq"
  }
]

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const Links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between m-10'>
            <span className='flex' >
              <div>

                <Menu className='md:hidden' onClick={() => setOpen(!open)}></Menu>

                <ul className={`bg-amber-200 absolute top-18 p-3 rounded-2xl duration-1000 transition-all ${open ? 'block' : 'hidden'}`}>
                  {Links}
                </ul>
                {/* {
                open && <ul className='bg-amber-200 absolute top-8 duration-1000 p-3 rounded-2xl'>{Links}</ul>
                } */}
              </div>
              
              <h2 className='hidden md:block text-3xl font-bold bg-linear-to-r from-purple-800 to-pink-500 bg-clip-text text-transparent ml-4'>Digitools</h2>
            
            </span>

            <div>
              <ul className='hidden md:flex md:gap-3 lg:gap-4'>
                {
                  Links
                }
              </ul>
              <h2 className='text-3xl font-bold bg-linear-to-r from-purple-800 to-pink-500 bg-clip-text text-transparent ml-4 md:hidden '>Digitools</h2>
                
            </div>

            <div className='flex md:gap-3 lg:gap-4'>
              <button className='cursor-pointer transition-all'><span><ShoppingCart></ShoppingCart></span></button>
              <button className='cursor-pointer transition-all'>Login</button>
              <button className='btn bg-linear-to-r from-purple-800 to-pink-500 rounded-full'>Get Started</button>
            </div>
            
            
        </nav>
    )
};

export default NavBar;