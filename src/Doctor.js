import React, {Component} from 'react';
import DoctorList from './DoctorList';

class Doctor extends Component {
    constructor(){
        super()
        // this.state = {
        //     drList: [{name}]
        // }
    }
   render(){
       return(
        <div className="container">
        <div className="row">
            <div className="col-md-3">
               <DoctorList name="Sonam" edu="M.B.B.S" batch="1993"/>
               <DoctorList name="Sonam" edu="M.B.B.S" batch="1993"/>
               <DoctorList name="Sonam" edu="M.B.B.S" batch="1993"/>
               <DoctorList name="Sonam" edu="M.B.B.S" batch="1993"/>
            </div>
            
        </div>

        </div>
       );
   }
}

export default Doctor;