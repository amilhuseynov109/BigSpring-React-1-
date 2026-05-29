import React from 'react'
import cta from '../../assets/cta.svg'

function Pricing() {
  return (
    <>
        <section>
            <div className='md:max-w-[1100px] md:mx-auto '>
                <div className='my-14'>
                    <h1 className='text-5xl text-center'>Pricing</h1>
                </div>
                <div className='p-4 grid gap-9 md:gap-0 md:grid-cols-3 md:items-center'>
                    <div className='text-center border-1 border-[#dfdfdf] grid gap-1 p-8 h-[400px]'>
                        <h1 className='text-2xl font-bold'>Basic Plan</h1>
                        <h1 className='text-4xl md:text-5xl'>$41</h1>
                        <p className='text-2xl text-[#777777]'>Best For Small Individuals</p>
                        <p className='text-[#777777]'>Express Service</p>
                        <p  className='text-[#777777]'>Customs Clearance</p>
                        <p  className='text-[#777777]'>Time-Critical Services</p>
                        <button className='border-1 border-[#43bcbc] text-center mx-auto text-md p-2 px-8 rounded-4xl text-[#777777]'>Get Started for free</button>
                    </div>
                    <div className='text-center border-1 border-[#dfdfdf] grid gap-1 p-8 h-[450px] shadow-2xl'>
                        <h1 className='text-2xl font-bold'>Professioanl Plan</h1>
                        <h1 className='text-4xl md:text-5xl'>$69</h1>
                        <p className='text-2xl text-[#777777]'>Best For Professioanls</p>
                        <p className='text-[#777777]'>Express Service</p>
                        <p  className='text-[#777777]'>Customs Clearance</p>
                        <p  className='text-[#777777]'>Time-Critical Services</p>
                        <p  className='text-[#777777]'>Cloud Service</p>
                        <p  className='text-[#777777]'>Best Dashboard</p>
                        <button className='border-1 border-[#43bcbc] text-center mx-auto text-md p-2 px-8 rounded-4xl text-white bg-[#0aa8a7]'>Get Started</button>
                    </div>
                    <div className='text-center border-1 border-[#dfdfdf] grid gap-1 p-8 h-[400px]'>
                        <h1 className='text-2xl font-bold'>Bussines Plan</h1>
                        <h1 className='text-4xl md:text-5xl'>$99</h1>
                        <p className='text-2xl text-[#777777]'>Best For Large Individuals</p>
                        <p className='text-[#777777]'>Express Service</p>
                        <p  className='text-[#777777]'>Customs Clearance</p>
                        <p  className='text-[#777777]'>Time-Critical Services</p>
                        <button className='border-1 border-[#43bcbc] text-center mx-auto text-md p-2 px-8 rounded-4xl text-[#777777] '>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='p-6 mt-10 md:flex md:flex-row md:items-center md:justify-center md:gap-4 mb-20' >
                        <div>
                            <img src={cta} alt="" className='w-[300px] mx-auto'/>
                        </div>
                        <div className='text-center mt-5  grid gap-3 md:max-w-[600px] md:text-left'>
                            <h1 className='text-3xl font-bold '>Need a Large Plan ?</h1>
                            <p className='max-w-[370px] text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
                            <a href="#" className='p-3 text-lg text-white font-bold bg-[#0aa8a7] w-[40%] md:w-[40%] text-center mx-auto md:mx-0 rounded-3xl'>Contact Us</a>
                        </div>
            </div>
        </section>
    </>
  )
}

export default Pricing
