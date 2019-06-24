import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import utils from './utils/utils'

class Day extends React.Component {

    constructor({month, dayIndex}) {
        super();
        this.state = {
            month: month,
            id: dayIndex,
            comment: null,
            haveComment: false,
            modal: false,
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({modal: !prevState.modal}))
    };

    addComment = (event) => {
        const targetDay = utils.getTargetDay(this.props);
        let value = event.target.value;
        if (value === '') {
            value = null;
        }

        if (this.state.haveComment) {
            console.log(this.state.comment, targetDay['comment'])
            this.props.editComment(targetDay, event.target.value);
        }

        this.setState({comment: value});
    };

    saveComment = () => {
        this.toggleModal();

        if (this.state.comment) {
            this.setState({haveComment: true,});
            this.props.saveDaysState(this.state);

        } else {
            this.setState({haveComment: false,});
        }

    };

    cancelComment = () => {
        const targetDay = utils.getTargetDay(this.props);
        if (targetDay) {
            this.setState({cancel: true});
            this.props.editComment(targetDay, this.state.comment, this.state.cancel)

        } else {
            this.setState({editing: false, comment: null});
        }
        this.toggleModal();
    };

    setClassToday = () => {
        let {dayIndex, firstDayNumber, today} = this.props;

        if (today.getDate() === dayIndex - firstDayNumber + 1) {
            return "today";
        }
    };
    setClassDayWithComment = () => {
        if (this.state.comment) {
            return "comment";
        }
    };

    componentDidUpdate(prevProps, prevState) {

        const {dayIndex, month} = this.props;
        const targetDay = utils.getTargetDay(this.props);


        if (targetDay && targetDay['comment'] !== this.state.comment) {
            this.setState({
                month: targetDay['month'],
                id: targetDay['id'],
                haveComment: true,
                editing: false,
                comment: targetDay['comment'],
            })
        }
        if (this.props.month !== prevState.month) {
            this.setState({
                month: month,
                id: dayIndex,
                haveComment: false,
                comment: null,
                modal: false,
            })
        }

    }

    render() {
        return (
            <td id={Math.random()}

                className={this.state.haveComment ? this.setClassDayWithComment() + ' ' + this.setClassToday() :
                    this.setClassToday()
                }
                onClick={(id) => {
                    this.toggleModal(id)
                }}
            >
                {!this.state.modal ? this.state.comment ? utils.checkDays(this.props) ? utils.checkDays(this.props) + this.state.comment : null : utils.checkDays(this.props) :

                    <Modal isOpen={this.state.modal} toggle={false} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

                        <textarea placeholder={'type something'}
                                  value={this.state.comment}
                                  onChange={event => this.addComment(event)}
                        >{this.state.comment}
                                        </textarea>

                        <ModalFooter>
                            <Button color="primary" onClick={this.saveComment}> Save </Button>{' '}
                            <Button color="secondary" onClick={this.cancelComment}> Cancel </Button>
                        </ModalFooter>
                    </Modal>

                }
            </td>)
    }
}


export default Day;