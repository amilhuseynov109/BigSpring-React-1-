import React from 'react'
import banner from './assets/banner-art.svg'
import code from './assets/code.svg'
import oop from './assets/oop.svg'
import user from './assets/user-clock.svg'
import love from './assets/love.svg'
import speedometer from './assets/speedometer.svg'
import cloud from './assets/cloud.svg'
import service1 from './assets/service1.png'
import service2 from './assets/service2.png'
import service3 from './assets/service3.png'
import banner1 from './assets/banner1.svg'
import cta from './assets/cta.svg'


function MainContent() {
  return (
    <>
    <section id='let solve it' className='pt-[50px]'>
        <div className=' text-center'>
            <div className='p-3 md:p-0'> 
                <h1 className='font-bold text-3xl md:text-5xl max-w-[800px] mx-auto'>Let us solve your critical website development challenges</h1>
                <p class="mt-4"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque 
                <br/> totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</span>
                </p>
                <img src={banner} alt=""  className='w-2xl mx-auto mt-10'/>
            </div>
        </div>
    </section>
    <section id='You need know' className=''>
        <div className='bg-[#edf6f5]  md:p-12'>
            <div>
                <h1 className='text-3xl text-center pt-15 font-bold'>Something You Need To Know</h1>
            </div>
            <div className='p-2 mt-7     grid gap-3 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] mx-auto '>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={code} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={oop} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={user} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={love} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={speedometer} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='bg-white rounded-2xl text-center p-7 grid gap-2'>
                    <img src={cloud} alt="" className='w-9 mx-auto' />
                    <h1 className='text-2xl font-bold'>Clean Code</h1>
                    <p className='max-w-[85%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
            </div>
        </div>
    </section>
    <section id='Most Advanced'>
        <div className='md:flex mt-12 p-4 mb-12 md:max-w-[1200px] md:mx-auto'>
            <div className='order-1 md:order-2'>
                <img src={service1} alt="" />
            </div>
            <div className='order-2 md:order-1 md:max-w-[550px]'>
                <h1 className='text-3xl font-bold mt-6'>It is the most advanced digital marketing and it company.</h1>
                <p className='mt-4 text-[#333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                <a href="#" className='text-[#0aa8a7]'>Check it Out</a>
            </div>
        </div>
    </section>
    <section id='Privately' className='bg-[#edf6f5]'>
        <div className='md:flex mt-12 p-4 mb-12 md:max-w-[1200px] md:mx-auto '>
            <div>
                <img src={service2} alt="" />
            </div>
            <div className='md:max-w-[550px]'>
                <h1 className='text-3xl font-bold mt-6'>It is a privately owned Information and cyber security company</h1>
                <p className='mt-4 text-[#333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                <a href="#" className='text-[#0aa8a7]'>Check it Out</a>
            </div>
        </div>
    </section>
    <section id='It is team '>
         <div className='md:flex mt-12 p-4 mb-12 md:max-w-[1200px] md:mx-auto'>
            <div className='order-1 md:order-2'>
                <img src={service3} alt="" />
            </div>
            <div className='order-2 md:order-1 md:max-w-[550px]'>
                <h1 className='text-3xl font-bold mt-6'>It’s a team of experienced and skilled people with distributions</h1>
                <p className='mt-4 text-[#333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                <a href="#" className='text-[#0aa8a7]'>Check it Out</a>
            </div>
        </div>
    </section>
    <section id='Company' className='bg-[#edf6f5]'>
        <div className='md:flex mt-12 p-4 mb-12 md:max-w-[1200px] md:mx-auto '>
            <div>
                <img src={service1} alt="" />
            </div>
            <div className='md:max-w-[550px]'>
                <h1 className='text-3xl font-bold mt-6'>A company standing different from others</h1>
                <p className='mt-4 text-[#333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                <a href="#" className='text-[#0aa8a7]'>Check it Out</a>
            </div>
        </div>
    </section>
    <section id='Experience'>
        <div>
            <div>
                <h1 className='text-3xl md:text-5xl md:max-w-[500px] text-center max-w-[85%] mx-auto font-bold'>Experience the best workflow with us</h1>
            </div>
            <div>
                <img src={banner1} alt="" className='w-full mt-8'/>
            </div>
        </div>
    </section>
    <section id='Ready to get started'>
        <div className='p-6 mt-10 md:flex md:flex-row md:items-center md:justify-center md:gap-4 md:mb-20j' >
            <div>
                <img src={cta} alt="" className='w-[300px] mx-auto'/>
            </div>
            <div className='text-center mt-5  grid gap-3 md:max-w-[600px] md:text-left'>
                <h1 className='text-4xl font-bold '>Ready to get started?</h1>
                <p className='max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
                <a href="#" className='p-3 text-lg text-white font-bold bg-[#0aa8a7] w-[40%] md:w-[40%] text-center mx-auto md:mx-0 rounded-3xl'>Contact Us</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainContent
