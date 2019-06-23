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
        };
    }


    toggleModal = () => {
            this.setState(prevState=>({modal: !prevState.modal}))
    };



    addComment = (event) => {
       // event.target.value===''?
            //this.setState( {comment: null,} ):
            this.setState( {comment: event.target.value} );
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

        if(this.state.haveComment !== prevState.haveComment){
            this.props.saveDaysState(this.state);
        }


        const{dayIndex , daysState, month, updateDays} = this.props;
        const targetMonth = daysState
            .filter((day)=>(day['month'] === month));


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


        console.log(this.props.daysState, targetMonth)
    }

    render(){


        //console.log(this.props.daysState);

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