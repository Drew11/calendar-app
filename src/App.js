import React from 'react';
import Week from './components/Week';
import Day from './components/Day';
import logo from './logo.svg';
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
   getFirtDayName = () => {
       const {year, month} = this.state;
       return new Date(year, month , 1).getDay();
   };

    getDaysInMonth = () => {
        const {year, month} = this.state;
        return new Date(year, month+1, 0).getDate();
    };

    createWeek = () => {

        const firstDay = this.getFirstDayMouth(), //1
              firstDayNumber = this.getFirtDayName(), // Sunday
              daysInMonth = this.getDaysInMonth(); //30

        const mappingEl = [];
        let countWeek = 0;

        while (Math.ceil(daysInMonth/7) !==countWeek){


            mappingEl.push(<Week
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
                     <span>{this.state.year}</span>
                     <span>{this.state.monthNames[this.state.month]}</span>

                 </div>
                <table className={"calendar-board"}>
                    {
                        this.createWeek()
                    }
                </table>
              </header>
          </div>
      );
  }
}

export default App;
