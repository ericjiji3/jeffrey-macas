import Image from 'next/image'
import './events.css'
import EventPhoto from '../../../public/images/eventImg.jpg'

export default function Events() {
  return (
    <div className="eventsContainer">
      <div className="eventContainer">
          <div className="col">
            <Image
              src={EventPhoto}
              alt="oops"
            />
          </div>
          <div className="col">
            <h2 className="date">My Name Is Jeff</h2>
            <span><b>29 December 2023</b></span>
          </div>
          <div className="col">
            <h3 className="location">Houston, TX</h3>
            <span>Houston Vintage Truck Club</span>
          </div>
          <div className="col">
            <a className="button" href="https://www.eventbrite.com/e/my-name-is-jeff-dec-29th-friday-tickets-771017824067?aff=ebdshpsearchautocomplete"><h4>Buy Tickets</h4></a>
          </div>
      </div>
      <div className="eventContainer">
          <div className="col">
            <Image
              src={EventPhoto}
              alt="oops"
            />
          </div>
          <div className="col">
            <h2 className="date">My Name Is Jeff</h2>
            <span className="date"><b>29 December 2023</b></span>
          </div>
          <div className="col">
            <h3 className="location">Houston, TX</h3>
            <span>Houston Vintage Truck Club</span>
          </div>
          <div className="col">
            <a className="button" href="https://www.eventbrite.com/e/my-name-is-jeff-dec-29th-friday-tickets-771017824067?aff=ebdshpsearchautocomplete"><h4>Buy Tickets</h4></a>
          </div>
      </div>
    </div>
  )
}
