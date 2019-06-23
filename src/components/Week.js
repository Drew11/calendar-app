import React from 'react';
import Day from './Day';

function Week({
               countWeek,
               firstDay,
               firstDayNumber,
               dayNames,
               onDayClick,
               daysInMonth,
               today,
               month,
               thisMonth,
              saveDaysState,
              daysState,
              updateDays
}
               ) {


    const days = dayNames.map((dayName, index)=>{
        return <Day dayIndex={(index + 1) + (countWeek * 7)}
                    updateDays={updateDays}
                    daysState={daysState}
                    saveDaysState={saveDaysState}
                    thisMonth={thisMonth}
                    month={month}
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
