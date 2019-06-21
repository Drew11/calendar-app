import React from 'react';

class Day extends React.Component {

    constructor({onDayClick,
                    today}) {
        super();
        this.state={
            today: today,
            editing: false
        }

        this.dayOnClick =onDayClick;
    }
    setEditingStatus = ()=> {
        this.setState({editing: true});
    };

    checkToday = ()=> {
        let {index, firstDayNumber,} = this.props;
        if(this.state.today.getDate()===index-firstDayNumber+1){
            return "today";
        }
    };

     checkDays = ()=> {

       let {index, daysInMonth, firstDayNumber, countWeek, firstDay} = this.props;

        if(index>daysInMonth+firstDayNumber-1){
            return null;
        }
        if(countWeek ===0 && index===firstDayNumber){
           return firstDay;
        }
        if(countWeek ===0 && index>firstDayNumber){
            return firstDay+1
        }else index++;

        if(countWeek!==0){
            return index-firstDayNumber;
        }
    };

    render(){
        const randomstring = require("randomstring"),
              id = randomstring.generate(4);


        return(

          !this.state.editing ? <td id={id}
             className={this.checkToday()}
             onClick={()=>this.setEditingStatus(id)}
            >
                {this.checkDays()}

          </td>: <div id={id}>{id}</div> )
}

}


//

//     const randomstring = require("randomstring");
//     const id = randomstring.generate(4);
//

// }

export default Day;