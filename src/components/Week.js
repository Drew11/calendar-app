import React from 'react';
import Day from './Day';

function Week({
                  countWeek,
                  firstDay,
                  firstDayNumber,
                  dayNames,
                  daysInMonth,
                  today,
                  month,
                  thisMonth,
                  saveDaysState,
                  daysState,
                  updateDays,
                  editComment,
                  cancelComment
              }
) {


    const days = dayNames.map((dayName, index) => {
        return <Day dayIndex={(index + 1) + (countWeek * 7)}
                    cancelComment={cancelComment}
                    editComment={editComment}
                    updateDays={updateDays}
                    daysState={daysState}
                    saveDaysState={saveDaysState}
                    thisMonth={thisMonth}
                    month={month}
                    today={today}
                    countWeek={countWeek}
                    dayName={dayName}
                    day={index + 1}
                    firstDay={firstDay}
                    firstDayNumber={firstDayNumber}
                    daysInMonth={daysInMonth}
        />
    });

    return <tr> {days} </tr>

}

export default Week;
