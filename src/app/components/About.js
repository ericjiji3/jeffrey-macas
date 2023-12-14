import Image from 'next/image'
import styles from './about.css'
import Profile from '../../../public/images/profile.png'

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="contentContainer">


      <div className="imageContainer">
        <Image
          src={Profile}
          width="100%"
        />
      </div>
      <div>
      Jeffrey Macas is an up-and-coming comedian based in Houston, TX.
      Jeffrey has headlined sold-out shows in Austin and Houston, and has performed all over Los Angeles (Comedy Store, Ice House, Knitting Factory).
      Outside of stand-up, Jeffrey has an improv background from the Upright Citizens Brigade & the Groundlings, as well as acting training from Anthony Meindl's Acting Workshop.
      Jeffrey is also know for his video content which has amassed a large social media following (less than 1,000 followers across all platforms).
      Jeffrey is not represented by anybody, not even himself.
      </div>
      
      </div>
    </div>
  )
}
