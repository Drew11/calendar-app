import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import utils from './utils/utils'

class Day extends React.Component {

    constructor({onDayClick,
                    today,
                    thisMonth,
                    firstDayNumber,
                    dayIndex,
                    daysInMonth,
                    month
                }) {
        super();
        this.state = {
            month: month,
            id: dayIndex,
            haveComment: false,
            editing: false,
            comment: null,
            modal: false,
            close: false,
            clickedCellId: null
        };
    }


    toggleModal = () => {
            this.setState(prevState=>({modal: !prevState.modal}))
    };



    addComment = (event) => {

        const{dayIndex , daysState, month, editComment} = this.props,
            targetDay = daysState
                .filter((day)=>(day['month'] === month) && (day['id'] === dayIndex));

          if(targetDay[0]){
              this.setState( {comment: event.target.value});
              editComment(targetDay[0], event.target.value);
          }
          else this.setState( {comment: event.target.value} )

       // event.target.value===''?
            //this.setState( {comment: null,} ):

    };

    saveComment = () => {
        if(this.state.comment) {
            this.setState({
                haveComment: true,
            });
        }

        this.toggleModal();
    };

    cancelledComment = () => {
        const{dayIndex , daysState, month } = this.props,
             targetDay = daysState
            .filter((day)=>(day['month'] === month) && (day['id'] === dayIndex));

        let comment;
        console.log(daysState)
        targetDay[0] ? comment = targetDay[0]['comment'] : comment = null;

       this.setState({
        haveComment: false,
        comment: comment,
        });

        this.toggleModal();

    };

    setClassToday = ()=> {
        let {dayIndex, firstDayNumber, today} = this.props;

        if(today.getDate()===dayIndex-firstDayNumber+1){
            return "today";
        }
    };

    componentDidUpdate(prevProps, prevState) {

        const{dayIndex , daysState, month, updateDays} = this.props;
        const targetDay = daysState
            .filter((day)=>(day['month'] === month && day['id'] === dayIndex));




        if(this.state.haveComment !== prevState.haveComment){
            this.props.saveDaysState(this.state);
        }

        if(targetDay[0]){
            if(targetDay[0]['comment']!==this.state.comment){
                this.setState({
                    month: month,
                    id: dayIndex,
                    haveComment: true,
                    editing: false,
                    comment: targetDay[0]['comment'],
                    modal: false,
                    close: false,})
            }
        }



        if (this.props.month!==prevProps.month){
            this.setState({
                month: month,
                id: dayIndex,
                haveComment: false,
                editing: false,
                comment: null,
                modal: false,
                close: false,})
        }
    }

    render(){
        return(
         <td id={Math.random()}

             className={this.setClassToday()}
             onClick={(id)=>{
                 this.toggleModal(id)
             }}
            >
                { !this.state.modal ? this.state.comment? utils.checkDays(this.props)? utils.checkDays(this.props)+ this.state.comment: null : utils.checkDays(this.props):

                    <Modal isOpen={this.state.modal} toggle={false} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} >Modal title</ModalHeader>

                            <textarea placeholder={'type something'}
                                      value={this.state.comment}
                                      onChange={event=>this.addComment(event)}
                            >{this.state.comment}
                                        </textarea>

                        <ModalFooter>
                            <Button  color="primary" onClick={this.saveComment}> Save </Button>{' '}
                            <Button  color="secondary" onClick={this.cancelledComment}> Cancel </Button>
                        </ModalFooter>
                    </Modal>

                }
          </td>)

    }
}


export default Day;