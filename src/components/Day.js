import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Day extends React.Component {

    constructor({onDayClick,
                    today}) {
        super();
        this.state={
            today: today,
            haveComment:false,
            editing: false,
            comment: null,
            modal: false,
        };
    }

    toggleStatus = (target)=> {
        if(target){
            console.log(target.textContent)
        }
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        // if(!this.state.editing){
        //     this.setState({editing: true});
        // }
        // else this.setState({editing: false});
    };


    checkToday = ()=> {
        let {index, firstDayNumber,} = this.props;
        if(this.state.today.getDate()===index-firstDayNumber+1){
            return "today";
        }
    };

    addComment = (event) => {
            this.setState({
               comment: event.target.value
            });

        if(event.target.value===''){
            this.setState({
                comment: null,
                haveComment: false
            })

    }};

    saveComment = ()=> {
        this.setState({
            haveComment: true
        });
        this.toggleStatus();
    };



     checkDays = ()=> {

       let {index, daysInMonth, firstDayNumber, countWeek, firstDay} = this.props;
            let count = 0;

        if(index>daysInMonth+firstDayNumber-1){
            return null;
        }
        if(countWeek===0 && index===firstDayNumber){

           return index = firstDay;

        }

        if(countWeek===0 && index>firstDayNumber){
            count++;
            return ()=>{
                return count;
            }
        }

        if(countWeek!==0){
            index ++;
            return index-firstDayNumber;
        }

    };

    render(){
        // const randomstring = require("randomstring"),
        //       id = randomstring.generate(4);

        console.log(this.state)

        return(
         <td id={Math.random()}
             className={this.checkToday()}
             onClick={(event)=>{
                 this.toggleStatus(event.target)
             }}
            >

                { !this.state.modal ? this.state.comment? this.checkDays()?this.checkDays() + this.state.comment: null : this.checkDays():

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} >Modal title</ModalHeader>

                            <textarea placeholder={'type something'}
                                      value={this.state.comment}
                                      onChange={(event)=>{this.addComment(event)}}
                            >{this.state.comment}
                                        </textarea>

                        <ModalFooter>
                            <Button  color="primary" onClick={()=>{this.saveComment()}}>Save</Button>{' '}
                            <Button  color="secondary" onClick={(event)=>this.toggleStatus(event.target)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                }
          </td>)

    }

}



export default Day;