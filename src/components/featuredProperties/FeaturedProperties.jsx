import "./featuredProperties.css"

export default function FeaturedProperties() {
  return (
  <div className="fp">
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Comfort Suites Airport</span>
      <span className="fpCity">Austin</span>
      <span className="fpPrice">Starting from $140</span>
      <div className="fpRating">
        <button>9.3</button>
        <span>Exceptional</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
        alt=""
        className="fpImg"
      />
      <span className="fpName">Four Seasons Hotel</span>
      <span className="fpCity">Lisbon</span>
      <span className="fpPrice">Starting from $99</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
        alt=""
        className="fpImg"
      />
      <span className="fpName">Hilton Garden Inn</span>
      <span className="fpCity">Berlin</span>
      <span className="fpPrice">Starting from $105</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
  </div>
  )
}
