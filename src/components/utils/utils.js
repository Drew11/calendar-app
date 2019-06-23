const utils = {
   checkDays
};

//
// function getModile(modal, toggle,) {
//     return <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//         <ModalHeader toggle={this.toggle} >Modal title</ModalHeader>
//
//         <textarea placeholder={'type something'}
//                   value={this.state.comment}
//                   onChange={event=>this.addComment(event)}
//         >{this.state.comment}
//                                         </textarea>
//
//         <ModalFooter>
//             <Button  color="primary" onClick={()=>this.saveComment()}> Save</Button>{' '}
//             <Button  color="secondary" onClick={this.cancelledComment}>Cancel</Button>
//         </ModalFooter>
//     </Modal>
// }

function checkDays(props) {
     let {dayIndex, daysInMonth, firstDayNumber, countWeek} = props;

     if(dayIndex>daysInMonth+firstDayNumber-1){
         return null;
     }
     if(countWeek===0 && dayIndex===firstDayNumber){
         return dayIndex-firstDayNumber+1;
     }

     if(countWeek===0 && dayIndex>firstDayNumber){
         return dayIndex-firstDayNumber+1;
     }
     if(countWeek!==0){
         dayIndex ++;
         return dayIndex-firstDayNumber;
     }
}


export default utils;