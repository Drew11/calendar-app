import React from 'react';
import Day from './Day';

function Week({firstDay, firstDayNumber , dayNames, onDayClick, daysInMonth}) {

    const days = dayNames.map((dayName, index)=>{
        return <Day id={index+1}
                    day={index+1}
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