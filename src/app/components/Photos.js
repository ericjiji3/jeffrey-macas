import Image from 'next/image'
import './photos.css'
import Img1 from '../../../public/images/pic1.jpg'
import Img2 from '../../../public/images/pic2.jpg'
import Img3 from '../../../public/images/pic3.jpg'
import Img4 from '../../../public/images/pic4.jpg'
import Img5 from '../../../public/images/pic5.jpg'
import Img6 from '../../../public/images/pic6.jpg'
import Img7 from '../../../public/images/pic7.jpg'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Photos() {

  return (
    <div className="photosContainer">
      <div className="contentContainer">
        <Carousel className="myCarousel" infiniteLoop="true" showIndicators="false" width={400} renderThumbs={() => (
          [<Image src={Img1} width={400} height={100} alt="oops" key={0}/>,
          <Image src={Img2} width={400} height={100} alt="oops" key={1}/>,
          <Image src={Img3} width={400} height={100} alt="oops" key={2}/>,
          <Image src={Img4} width={400} height={100} alt="oops" key={3}/>,
          <Image src={Img5} width={400} height={100} alt="oops" key={4}/>,
          <Image src={Img6} width={400} height={100} alt="oops" key={5}/>,
          <Image src={Img7} width={400} height={100} alt="oops" key={6}/>]
        )
        }
        thumbWidth={37.5}
        >
            <div className="slideContainer">
              <Image src={Img1} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img2} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img3} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img4} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img5} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img6} width={400} height={100} alt="oops"/>
            </div>
            <div className="slideContainer">
              <Image src={Img7} width={400} height={100} alt="oops"/>
            </div>
        </Carousel>
      </div>
      
    </div>
  )
}
