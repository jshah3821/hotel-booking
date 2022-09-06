import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='datepicker'>
    <DatePicker
      dateFormat="dd MMMM,Y"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    <i id="date_icon" className="fas fa-calendar-alt" style={{color:"#dfa974"}} aria-hidden="true"></i>
    </div>
  );
}

export default DateSelector;