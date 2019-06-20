import React from 'react';


function Day({firstDayNumber,daysInMonth , onDayClick}) {

    return<td id
                 onClick={()=>onDayClick()}
            >
           { "must be value...."}
    </td>
}

export default Day;