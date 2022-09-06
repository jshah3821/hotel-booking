import React from 'react'
import DropdownMenu from './DropdownMenu'
import "../Pages/Home/Home.css";
import DateSelector from './DateSelector';
import "../Pages/Home/Home.css"
const Modal = (props) => {
  const options1 = ["2 Adults","3 Adluts"];
  const options2 = ["1 Room","2 Room"]
  return (
    <>
      <div className="form">
        <h2>{props.title}</h2>
        <div>
        <label className="mb-2 checkin" htmlFor="checkIn">Check In</label>
        <DateSelector/>
        </div>
        <div>
        <label className="mb-2 checkout" htmlFor="checkOut">Check Out</label>
        <DateSelector/>
        </div>
        <DropdownMenu label={"Guests :"} options={options1} />
        <DropdownMenu label={"Room"} options={options2} />
        <button className="form_button">Check Availability</button>
      </div>
    </>
  )
}

export default Modal;