import { Carousel } from "keep-react";

const CarouselBanner = () => {
    return (
        <div className="">

<Carousel slideInterval={3000} showControls={true} indicators={true} className="lg:!h-[500px]">
      <img
        src="https://www.bdfertilityhospital.com/wp-content/uploads/2022/07/bd-fertility-2-700x300.png"
        alt="slider-1"
        className="h-full"
       
      />
      <img
        src="https://www.bdfertilityhospital.com/wp-content/uploads/2022/07/nirmol-hashi-700x300.png"
        alt="slider-2"
        className="h-full"
      />
     
      
    
    </Carousel>
            
        </div>
    );
};

export default CarouselBanner;