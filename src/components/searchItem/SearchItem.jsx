import './searchItem.css'

export default function SearchItem() {
  return (
    <div className='search-result-container'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square200/502122864.webp?k=84fd78b379e5579f5f5cbe30677d196f83875733579f0d28ca1dc43a933d0cf6&o=' className='search-img'
        />
        <div className="search-desc">
            <h2 className='se-title'>Tower Street Apartments</h2>
            <p className='se-distance'>500m from center</p>
            <span className='taxi-op'>Free airport taxi</span>
            <p className='se-description'>Studio Apartment with Air conditioning</p>
            <p className='se-room-detail'>Entire studio · 1 bathroom · 21m 1 full bed </p>
            <span className='se-cancel-op'>Free cancellation</span>
            <p className='se-cancel-op-text'>You can cancel later, so lock in this great price today!</p>
        </div>
        <div className="search-details">
            <div className="rating-container">
                <p className='state'>Excellent</p>
                <span className='rating'>8.9</span>
            </div>
            <div className="price-info">
                <p className='price'>$112</p>
                <p className='taxes'>Includes taxes and fees</p>
                <button>See availability</button>
            </div>
        </div>
    </div>
  )
}
