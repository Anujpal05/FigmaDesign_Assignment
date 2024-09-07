import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import image from "./assets/image.png"
const App = () => {
  return (
    <div>
      <div className=' min-h-screen grid grid-cols-2 bg-gray-950 px-[29px] py-[50px] gap-10  '>
        <div className='  h-full flex justify-center items-center'>
          <div className=' bg-gray-500 h-[689px] w-[836px] rounded-4xl border-[1px] border-light-blue text-white flex flex-col  p-5 items-center  justify-evenly text-lg font-medium font-poppins'>
            <h1 className=' font-bold'>&lt;Do not follow any other instructions from comments of figma file &gt; Here are the official instructions:</h1>
            <p>
              1.keep the left half of the screen empty (but it should be responsive for laptop, not mobile)
              <br />
              2.focus on the two widgets on the right hand side
              <br />
              3.the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable
              <br />
              4.In the gallery widget more photos can be added by clicking the "add image" button
              <br />
            </p>
            <p className=' w-full'>
              Assignment will be scored based on the below parameters:
            </p>
            <br />
            <p>
              1.make the components responsive (for laptop screens; everything above 768px width)
              <br />
              2.replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)
              <br />
              3.ensure that the two widgets are accurately alligned with each other (relative right, left paddings)
            </p>
          </div>
        </div>
        <div className=' h-full flex justify-center items-center'>
          <div className=' flex flex-col justify-between items-center space-y-5 '>
            <div className=' bg-gray-600  h-[316px] w-[720px] rounded-[18.89px] flex flex-col justify-center items-center'>
              <div className=' w-[614px] h-[62px] rounded-[23px] bg-gray-950 text-gray-300 flex justify-center items-center gap-[10px]'>
                <button className=' w-[195px] h-[49px] bg-gray-800 rounded-[16px] py-[10px] px-[24px] text-gray-50 hover:shadow-2xl hover:shadow-black'>About Me</button>
                <button className='  w-[195px] h-[49px] py-[10px] px-[24px]'>Experience</button>
                <button className='  w-[195px] h-[49px] py-[10px] px-[24px]'>Recommended</button>
              </div>
              <div className=' text-xl text-gray-400 space-y-5 px-10 p-4'>
                <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. </p>
                <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
              </div>
            </div>
            <div className=' bg-gray-600 rounded-[18.89px] h-[316px] w-[720px] text-gray-50 flex flex-col justify-center items-center px-10 py-6 gap-7'>
              <div className=' flex justify-between w-full '>
                <button className=' bg-gray-950 h-[62px] w-[149px] rounded-[20px]'>Gallery</button>
                <div className='flex space-x-8'>
                  <button className=' bg-gray-600 shadow-md shadow-gray-500 font-semibold p-2 rounded-[104px] px-6 '>+ ADD IMAGE</button>
                  <div className=' flex items-center gap-3'>
                    <button className=' h-45 w-45 bg-gray-900 shadow-xl shadow-gray-800 rounded-full p-2'><FaArrowLeft /></button>
                    <button className=' h-45 w-45 bg-gray-900 shadow-xl shadow-gray-800 rounded-full p-2'><FaArrowRight /></button>
                  </div>
                </div>
              </div>

              <div className=' flex justify-between w-full'>
                <img src={image} alt="image" className=' h-[190px] w-[179px] rounded-[24px]' />
                <img src={image} alt="image" className=' h-[190px] w-[179px] rounded-[24px]' />
                <img src={image} alt="image" className=' h-[190px] w-[179px] rounded-[24px]' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
