import React from 'react';


function Day({firstDayNumber,daysInMonth , onDayClick}) {

    const mapping = [];

    for(let i = 0; i < daysInMonth;i++){
      mapping.push(i+1)
    }

    console.log(mapping);
    const day = mapping.map((day, index)=>{
       return  <td id={day}
                  onClick={()=>onDayClick(index)}
        >{
            day

        }
        </td>
    });

    return<>{day}</>
}

export default Day;