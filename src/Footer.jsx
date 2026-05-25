import React from 'react'
import logo from './assets/logo.png'; 
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";

function Footer() {
  return (
   <section className='bg-[#edf6f5]'>
        <div className='p-3  md:grid lg:grid-cols-4 md:grid-cols-2 md:text-center md:items-center md:justify-center md:max-w-[1200px] md:mx-auto md:mb-20'> 
            <div>
                <h1 className='text-2xl font-bold md:-mt-8'>Company</h1>
                <ul className='text-md mt-5 grid gap-2 text-gray-500'>
                    <li>Pricing</li>
                    <li>Quick Start</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-8 md:mt-0'>Product</h1>
                <ul className='text-md mt-5 grid gap-2 text-gray-500'>
                    <li>Features</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-8 md:mt-0'>Support</h1>
                <ul className='text-md mt-5 grid gap-2 text-gray-500'>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className='mt-8'>
                    <a href="#">
                        <img src={logo} alt=""  className='w-50'/>
                    </a>
                    <p className='mt-3 text-gray-500 md:max-w-[250px] md:text-left'>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
                    <ul className='flex justify-around max-w-[50%] text-2xl text-[#4ca8ca] mt-5 mb-5'>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaTwitterSquare />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                        <li>
                            <FaSkype />
                        </li>
                    </ul>
            </div>
        </div>
   </section>
  )
}

export default Footer
