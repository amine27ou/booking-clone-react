import './header.css'
import { useState } from 'react';
import { IoBedOutline } from "react-icons/io5";
import { FaPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';

export default function Header({type}) {
    const [date,setDate] = useState([
        {
            startDate : new Date(),
            endDate: new Date(),
            key : 'selection'
        }
    ])
    const [destination,setDestination] = useState("")
    const [openDate,setOpenDate] = useState(false)
    const [openOptions,setOpenOptions] = useState(false)
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    function handleOption(name,operation){
        setOptions(prevState=>(
            {...prevState, [name] : operation === 'i' ? options[name] + 1 : options[name] - 1 }
        ))
    }
    const navigate = useNavigate()
    function handleSearch(){
            navigate('/hotels',{state:{destination,date,options}})
    }
  return (
    <div className='header'>
        <div className={type === "list" ? `header-container list` :"header-container" }>
        <div className="header-list">
            <div className="header-list-item active">
                <IoBedOutline/>
                <span>Stays</span>
            </div>
            <div className="header-list-item">
                <FaPlane/>
                <span>Flights</span>
            </div>
            <div className="header-list-item">
                <FaCar/>
                <span>Car rentals</span>
            </div>
            <div className="header-list-item">
                <MdAttractions/>
                <span>Attractions</span>
            </div>
            <div className="header-list-item">
                <FaTaxi/>
                <span>Airport taxis</span>
            </div>
        </div>

        { type !=='list' && <><h1 className="header-title">
            Find your next stay
        </h1>
        <p className="header-desc">
        Search deals on hotels, homes, and much more...
        </p>
        <div className="header-search">
            <div className="header-search-item">
                <IoBedOutline className='header-icon'/>
                <input
                    type='text'
                    placeholder="Where are you going?"
                    className="header-search-input"
                    onChange={(e)=>{setDestination(e.target.value)}}
                />
            </div>
            <div className="header-search-item" >
                <FaRegCalendarAlt className='header-icon'/>
                <span onClick={()=>{setOpenDate(prevState=>!prevState)}} className='header-search-text'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                minDate={new Date()}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
            </div>
            <div className="header-search-item">
                <CiUser className='header-icon'/>
                <span onClick={()=>{setOpenOptions(!openOptions)}} className='header-search-text'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && <div className="options">
                    <div className="option-item">
                        <span className="option-text">Adult</span>
                        <div className="option-counter">
                            <button disabled={options.adult <= 1} className='option-counter-btn' onClick={()=>{handleOption('adult','d')}}> - </button>
                            <span className='option-counter-number'> {options.adult} </span>
                            <button className='option-counter-btn'  onClick={()=>{handleOption('adult','i')}}> + </button>
                        </div>
                    </div>
                    <div className="option-item">
                        <span className="option-text">Children</span>
                       <div className="option-counter">
                            <button disabled={options.children <= 0} className='option-counter-btn' onClick={()=>{handleOption('children','d')}}> - </button>
                            <span className='option-counter-number'> {options.children} </span>
                            <button className='option-counter-btn' onClick={()=>{handleOption('children','i')}}> + </button>
                       </div>
                    </div>
                    <div className="option-item">
                        <span className="option-text">Room</span>
                        <div className="option-counter">
                            <button disabled={options.room <= 1} className='option-counter-btn' onClick={()=>{handleOption('room','d')}}> - </button>
                            <span className='option-counter-number'> {options.room} </span>
                            <button className='option-counter-btn' onClick={()=>{handleOption('room','i')}}> + </button>
                        </div>
                    </div>
                </div>}
            </div>
            <button className='header-search-btn' onClick={handleSearch}>Search</button>
        </div></>}
        </div> 
    </div>
  )
}
