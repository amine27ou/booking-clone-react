import './mailList.css'

export default function MailList() {
  return (
    <div className='mail'>
        <h2>Save time, save money!</h2>
        <span>Sign up and we'll send the best deals to you</span>
        <div className="container">
        <div className="mail-input-container">
            <input type="text" placeholder='Your email address' className='mail-input' />
            <button className='mail-input-btn'>Subscribe</button>
        </div>
        <div className="checkbox-container">
            <input type='checkbox'/>
            <span>Send me a link to get FREE Booking.com app!</span>
        </div>
        </div>
    </div>
  )
}
