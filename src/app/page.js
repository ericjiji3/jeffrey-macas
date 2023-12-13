"use client"
import Image from 'next/image'
import styles from './page.module.css'
import About from './components/About'
import Photos from './components/Photos'
import Events from './components/Events'
import Videos from './components/Videos'
import Logo from '../../public/logo.png'

import {useState, useEffect} from 'react'


export default function Home() {
  const [showPhotos, setShowPhotos] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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

  return (
    <div className={styles.homeContainer}>
      <div className={styles.navContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={Logo}
            width={150}
          />
          
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={(e) => togglePhotos(e)}>Home</li>
          <li className={styles.navItem} onClick={(e) => toggleEvents(e)}>Events</li>
          <li className={styles.navItem} onClick={(e) => toggleVideos(e)}>Videos</li>
          <li className={styles.navItem} onClick={(e) => toggleAbout(e)}>About</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={showPhotos ? `${styles.compContainer} ${styles.active}` : `${styles.compContainer}`}>
          <Photos/>
        </div>
        <div className={showEvents ? `${styles.compContainer} ${styles.active}` : `${styles.compContainer}`}>
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
  )
}
