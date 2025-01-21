import React from 'react'
 import Image from 'next/image'
import Navbar from './Navbar';
const Hero = () => {
  return (
    
  <div className='min-screen-left'>
    <Navbar />
    <h1 className="text-5xl text-center text-white font-serif py-12 ">I M Nargis Ikram</h1>
    <div className="py-8 gap-48 flex justify-center items-center">
        <Image 
        src="/project4.jpeg"
        alt="image 4" 
        width={400}
        height={400}
        />
        <p>Welcome to my digital playground Im Nargis Ikram <br></br>
        a passionate and innovative  Student with a keen eye<br></br>
         for design and development. With a strong foundation<br></br>
          in my skills I specialize in crafting exceptional user <br></br>
          experiences and bringing ideas to life Explore my portfolio<br></br>
           to discover my latest projects and let s connect to create <br></br>
           something amazing together
        </p>
        </div>        
          </div>
  )
}

export default Hero;