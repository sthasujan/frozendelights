import React, { useEffect } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import contactimg from '../assets/contact.png'
import { FaFacebookF } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    })
  }, [])

  return (
    <div id='contact' className='w-full bg-gray-300 lg:px-[170px] px-[20px]
    lg:pt-[150px] pt-[70px] pb-[100px] flex flex-col justify-center items-center gap-[150px]'>
      {/* 1st row */}
      <div data-aos='zoom-in' data-aos-delay="200" className='lg:w-[60%] w-full flex flex-col justify-center items-center gap-6'>
        <h1 className='font-Lobster text-[55px] leading-[60px] text-center'>Order Preparation</h1>
        <div className='bg-red-600 h-2 w-[100px]'>
        </div>
        <p className='text-[20px] text-center mb-[30px] leading-[40px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore molestias minus quasi sunt dolorum quibusdam ullam accusamus
          laborum! Cum ducimus enim consequatur nulla doloribus culpa quia a nobis omnis aliquam.</p>
        <div className='flex justify-center items-center gap-4'>
          <FaPhoneVolume className='fill-red-600 lg:size-10 size-7' />
          <h1 className='lg:text-4xl text-3xl font-Lobster text-center'>+61 123 456 789</h1>
        </div>
      </div>

      {/*2nd row*/}
      <div className='w-full flex lg:flex-row flex-col justify-center items-start mt-[40px] lg:gap-[0px] gap-[60px]'>
        <div data-aos='zoom-in' data-aos-delay="400"
          className='lg:w-[40%] w-full bg-white lg:p-12 p-7 flex flex-col justify-center items-start gap-6 lg:h-[520px] h-fit z-20'>
          <h1 className='text-[50px] font-Lobster leading-[50px]'>Ice Cream Layer Cakes!</h1>
          <p className='text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque, quaerat nihil soluta magnam libero hic dolorum! Et
            dolorum aperiam nisi in quis quaerat. Consequuntur laborum voluptas ea hic sapiente?</p>
          <button className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>READ MORE</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[80%] w-full z-10'> 
          <img src={contactimg} alt="contact image" className='lg:mt-[-190px] lg:ml-[-50px] bg-cover bg-center' />
        </div>
      </div>

      {/*3rd row*/}
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-[50px]">
        <div data-aos="zoom-in" data-aos-delay="200" className='lg:w-[30%] w-full flex flex-col justify-center items-start gap-5'>
          <h1 className='text-[45px] font-Lobster leading-[65px] text-center'>
            Contact Us
          </h1>
          <p className='text-[20px] text-left'>
            Melbourne, Collins St. 1122 , Victoria
          </p>
          <h1 className='text-[30px] text-red-600 font-Lobster'>
            +61 123 456 789
          </h1>
          <h1 className='text-[30px] text-red-600'>frozendelights@gmail.com</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[70%] w-full bg-gray-600 lg:p-12 p-8 flex flex-col justify-center
        items-start gap-10 lg:h-[400px] h-fit'>
          <h1 className='text-[40px] text-white font-Lobster leading-[50px]'>
            Subscribe and never miss out on finds & deals delivered to your inbox.
          </h1>
          <form action="" className='flex lg:flex-row flex-col justify-center items-start gap-5 w-full'>
            <input type="text" placeholder='Enter Your FullName' className='px-10 py-3 w-full rounded-full' />
            <button className='bg-red-600 text-white px-10 py-3 rounded-full font-bold'>
              SUBMIT
            </button>
          </form>

          {/*Social Icons*/}
          <div className='flex justify-start items-center gap-6 w-full'>
            <FaFacebookF className='fill-white hover:fill-red-600 size-8' />
            <BsInstagram className='fill-white hover:fill-red-600 size-8' />
            <FaYoutube className='fill-white hover:fill-red-600 size-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact