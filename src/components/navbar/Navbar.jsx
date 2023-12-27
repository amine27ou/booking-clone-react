import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className="nav-container">
       <div className="logo">
            <h2>Booking.com</h2>
        </div>
        <div className="login-container">
            <button className='navBtn'>Register</button>
            <button className='navBtn'>Login</button>
        </div>
       </div>
    </div>
  )
}
