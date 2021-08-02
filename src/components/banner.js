import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
            
            <div>
               <img loading='lazy' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg " alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Devices/March21/Fuji_TallHero_EchoDot_en_US_1x._CB655386631_.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />
            </div>
            </Carousel>
        </div>
    )
}

export default Banner
