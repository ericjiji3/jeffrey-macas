"use client"
import Image from 'next/image'
import styles from './page.module.css'
import About from './components/About'
import Photos from './components/Photos'
import Events from './components/Events'
import Videos from './components/Videos'
import Logo from '../../public/jefferymacas.gif'
import Face1 from '../../public/faces/face1.png'
import Face2 from '../../public/faces/face2.png'
import Face3 from '../../public/faces/face3.png'
import {useState, useEffect} from 'react'


export default function Home() {
  const [showPhotos, setShowPhotos] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const[showIntro, setShowIntro] = useState(true);

  const togglePhotos = (e) =>{
    e.preventDefault();
    setShowPhotos(true);
    setShowEvents(false);
    setShowVideos(false);
    setShowAbout(false);
    console.log('true');
  }

  const toggleEvents = (e) =>{
    e.preventDefault();
    setShowPhotos(false);
    setShowEvents(true);
    setShowVideos(false);
    setShowAbout(false);
  }

  const toggleVideos = (e) =>{
    e.preventDefault();
    setShowPhotos(false);
    setShowEvents(false);
    setShowVideos(true);
    setShowAbout(false);
  }

  const toggleAbout = (e) =>{
    e.preventDefault();
    setShowPhotos(false);
    setShowEvents(false);
    setShowVideos(false);
    setShowAbout(true);
  }

  const toggleIntro = (e) => {
    e.preventDefault();
    setShowIntro(false);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={showIntro ? `${styles.introContainer} ${styles.active}` : `${styles.introContainer}`} onClick={(e) => toggleIntro(e)}>
        <div className={styles.faces}>
          <div className={styles.face1}>
            <Image
              src={Face1}
              width={300}
              alt="oops"
            />
          </div>
          <div className={styles.face2}>
            <Image
              src={Face2}
              width={350}
              alt="oops"
            />
          </div>
          <div className={styles.face3}>
            <Image
              src={Face3}
              width={300}
              alt="oops"
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={Logo}
            width={300}
            alt="oops"
          />
          <h2>Click to Enter</h2>
        </div>
      </div>
      <div className={showIntro ? `${styles.homeContainer}` : `${styles.homeContainer}  ${styles.active}`}>
        <div className={styles.navContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={Logo}
            width={300}
            alt="oops"
          />
          
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={(e) => togglePhotos(e)}><h4>Home</h4></li>
          <li className={styles.navItem} onClick={(e) => toggleEvents(e)}><h4>Events</h4></li>
          <li className={styles.navItem} onClick={(e) => toggleVideos(e)}><h4>Videos</h4></li>
          <li className={styles.navItem} onClick={(e) => toggleAbout(e)}><h4>About</h4></li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={showPhotos ? `${styles.compContainer} ${styles.active}` : `${styles.compContainer}`}>
          <Photos/>
        </div>
        <div className={showEvents ? `${styles.compContainer} ${styles.eventsContainer} ${styles.active}` : `${styles.compContainer}`}>
          <Events/>
        </div>
        <div className={showVideos ? `${styles.compContainer} ${styles.active}` : `${styles.compContainer}`}>
          <Videos/>
        </div>
        <div className={showAbout ? `${styles.compContainer} ${styles.active}` : `${styles.compContainer}`}>
          <About/>
        </div>
      </div>
      </div>
      
      

    </div>
  )
}
