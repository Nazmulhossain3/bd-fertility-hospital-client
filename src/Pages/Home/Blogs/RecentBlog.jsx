import {  MagnifyingGlass } from "phosphor-react";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const RecentBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    return (
 <div>

 <div className="pt-16 pb-12 text-center">

  <h2 className="text-4xl font-bold inline border-b-2 border-[#E05EA6] text-[#E05EA6]  ">সম্প্রতিক পোষ্ট</h2>
  <p className="pt-4">আমাদের ব্লগ পোষ্টসমূহ
</p>



 </div>




<div className="p-8">
<div className="flex  items-center justify-center ">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

{/* ..............একটি সফল টেস্টটিউব বেবি */}


    <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0"  className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*fvo_xBu8WB87L98cXtLsXw.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <MagnifyingGlass className="!w-12 !h-12 text-[#E05EA6] "></MagnifyingGlass>
        <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">একটি সফল টেস্টটিউব বেবি । বাংলাদেশ ফার্টিলিটি হাসপাতাল
November 24, 2022by BD Fertility Hospital</p>
<button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                
                <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                 READ MORE
        </span>
               </button>
      </div>
    </div>
  
  {/* টিউব ব্লক............................... */}
  
    <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72">
        <img className="h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://i.ytimg.com/vi/Cy2SYe6LwcI/maxresdefault.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white"><MagnifyingGlass className="!w-12 !h-12 text-[#E05EA6] "></MagnifyingGlass></h1>
        <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">টিউব ব্লক <br />
August 17, 2022by BD Fertility Hospital </p>
       <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                
                <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                 READ MORE
        </span>
               </button>
      </div>
    </div>
  
  {/* কম শুক্রাণুর সংখ্যা.......,,,,,,,,,,,,,,,,,, */}
  
  
    <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-84UoEfu7AiDuGMaSmNHQQ.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-3xl font-bold text-white"><MagnifyingGlass className="!w-12 !h-12 text-[#E05EA6] "></MagnifyingGlass></h1>
        <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">কম শুক্রাণুর সংখ্যা <br />
August 17, 2022by BD Fertility Hospital</p>
<button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                
                <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                 READ MORE
        </span>
               </button>
      </div>
    </div>
   
   
   {/* আই ইউ আই চিকিৎসায় ব্যার্থতা....................... */}
   
    <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72">
        <img className="h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://birlafertility.com/wp-content/uploads/2023/04/All-about-IUI-Treatment.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-3xl font-bold text-white"><MagnifyingGlass className="!w-12 !h-12 text-[#E05EA6] "></MagnifyingGlass></h1>
        <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">আই ইউ আই চিকিৎসায় ব্যার্থতা
August 17, 2022by BD Fertility Hospital placeat.</p>
<button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#E05EA6] hover:bg-white group px-8 py-2 rounded-full">
                
                <span className="w-0 h-0 rounded bg-[#CB2782] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full  text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                 READ MORE
        </span>
               </button>
      </div>
    </div>
  </div>

</div>

            
        </div>
 </div>
    );
};

export default RecentBlog;