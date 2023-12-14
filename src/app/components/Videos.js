import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './videos.css'

export default function Videos() {
  return (
    <div className="videosContainer">
            <div className="videoContainer">
              <iframe src="https://www.youtube.com/embed/FJXv3mLnBuo" title="Interview Prank (Drake Edition)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="videoContainer">
              <iframe src="https://www.youtube.com/embed/BIMy2Df9rNA" title="Interview Prank (Toilet Edition) #shorts #prank #interview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="videoContainer">
              <iframe src="https://www.youtube.com/embed/uhugRCqST8k" title="I got NO DICK mannnn #shorts #dance" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
      
    </div>
  )
}
