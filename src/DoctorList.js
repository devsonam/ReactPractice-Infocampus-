import React, {Component} from 'react';

class DoctorList extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
           
            <div className="row">
                <div className="col-md-12">
                    <h3>Props Example</h3>
                </div>
                <div className="col-md-12 p-2 border">
                    <h4 className="text-info">{this.props.name}</h4>
                    <p className="text-center text-success">{this.props.edu}</p>
                    <span className="badge badge-danger text-center">{this.props.batch}</span>
                </div>
            </div>

           
        );
    }
}
export default DoctorList;
