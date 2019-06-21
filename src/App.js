import React from 'react';
import Week from './components/Week';
import './App.css';



class App extends React.Component {

  constructor(){
    super();

    const now = new Date();
    this.state = {
        year: now.getFullYear(),
        month: now.getMonth(),
        today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
        dayNames: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
       ],
        monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December" ]
    }
  }

   getFirstDayMouth = () =>{
      const {year, month} = this.state;
      return new Date(year, month , 1).getDate();

    };
    getFirstDayNumber = () => {
       const {year, month} = this.state;
       return new Date(year, month , 1).getDay();
   };

    getDaysInMonth = () => {
        const {year, month} = this.state;
        return new Date(year, month+1, 0).getDate();
    };

    createWeek = () => {
        const firstDay = this.getFirstDayMouth(), //1
              firstDayNumber =  this.getFirstDayNumber(), //6
              daysInMonth = this.getDaysInMonth(); //30

        const mappingEl = [];
        let countWeek = 0;
        let week = Math.ceil(daysInMonth/7);

        if((daysInMonth === 31 && firstDayNumber>5)  ||
            (daysInMonth>30 && firstDayNumber>6)){
            week++;
        }

        while (week!==countWeek){
            mappingEl.push(<Week
                today = {this.state.today}
                countWeek = {countWeek}
                firstDay ={firstDay}
                firstDayNumber = {firstDayNumber}
                daysInMonth={daysInMonth}
                dayNames={this.state.dayNames}
                onDayClick={this.onDayClick}
            />);
            countWeek++;
        }
         return mappingEl.map((component)=>component);
    };

    onDayClick = (id)=> {
      console.log(id)
    };

    render(){
      return (
          <div className="calendar-app">
              <header className="App-header">
                 <div className={"calendar-caption"}>

                     <button
                        onClick={()=>{
                            if(this.state.month===0){
                                return;
                            }
                            this.setState({month:this.state.month-1})
                        }}
                     >{'<'}</button>

                     <div className={"calendar-head"}>
                          <span>{this.state.year}</span>
                          <span>{this.state.monthNames[this.state.month]}</span>
                     </div>

                     <button
                         onClick={()=>{
                             if(this.state.month===11){
                                 return;
                             }
                             this.setState({month:this.state.month+1})
                         }}
                     >{'>'}</button>
                 </div>
                  <table className={"calendar-board"}>
                      <tr>
                          {this.state.dayNames.map((dayName)=><th>{dayName.slice(0, 3)}</th>)}
                      </tr>

                    { this.createWeek() }
                </table>
              </header>
          </div>
      );
  }
}

export default App;
