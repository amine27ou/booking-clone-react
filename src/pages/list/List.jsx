import './list.css'; // Make sure to replace 'list.css' with your actual CSS file
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../../components/searchItem/SearchItem';

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="ls-title">Search</h1>
            <div className="ls-item">
              <label>Destination </label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="ls-item">
              <label>Check-in-date</label>
              <span onClick={() => setOpenDate((prevState) => !prevState)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className='hotel-date'
                />
              )}
            </div>
            <div className="ls-item">
              <label>Options</label>
              <div className="ls-options-item">
                <span className="ls-option-text">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="ls-option-input" />
              </div>
              <div className="ls-options-item">
                <span className="ls-option-text">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="ls-option-input" />
              </div>
              <div className="ls-options-item">
                <span className="ls-option-text">
                  Adult <small>per night</small>
                </span>
                <input type="number" min={1} placeholder={options.adult} className="ls-option-input" />
              </div>
              <div className="ls-options-item">
                <span className="ls-option-text">
                  Children <small>per night</small>
                </span>
                <input type="number" min={0} placeholder={options.children} className="ls-option-input" />
              </div>
              <div className="ls-options-item">
                <span className="ls-option-text">
                  Room <small>per night</small>
                </span>
                <input type="number" min={1} placeholder={options.room} className="ls-option-input" />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
}
