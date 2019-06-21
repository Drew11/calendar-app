import React from 'react';
import Day from './Day';


function Week({
               countWeek,
               firstDay,
               firstDayNumber,
               dayNames,
               onDayClick,
               daysInMonth,
               today}
               ) {


    const days = dayNames.map((dayName, index)=>{
        return <Day index={(index + 1) + (countWeek * 7)}
                    today={today}
                    countWeek={countWeek}
                    dayName={dayName}
                    day={index+1}
                    firstDay={firstDay}
                    firstDayNumber={firstDayNumber}
                    onDayClick = {onDayClick}
                    daysInMonth = {daysInMonth}
                />
    });

    return <tr>
        {days}
    </tr>

}

export default Week;
