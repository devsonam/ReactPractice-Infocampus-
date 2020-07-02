import React, {Component} from 'react';

class ArraOne extends Component{
    constructor(){
        super()
        this.state ={
            item: ["Mango", "Apple", "Banana", "Orange"],
            tempItem: '',
            msg: ''
        }
    }
    updateItem = (event) =>{
        this.setState({
            tempItem: event.target.value
        })
    }

    save = () =>{
     if(this.state.tempItem){
        this.setState({
            item: this.state.item.concat(this.state.tempItem),
            tempItem: '',
            msg: 'Item Added Succssfully'
         })
     }else{
         this.setState({
            msg: 'Please Add Some Item'
         })
     }
    }

    delete = (index) =>{
        let newItem = [...this.state.item]
        // this.state.item.splice(index, 1);
        this.setState({
            item: newItem,
            msg: 'Item Deleted Successfully'
        })


    }
    render(){
        return(
            <div className="container">
                <div className="row form-group">
                    <div className="col-md-12">
                        <h3 className="text-center text-danger">Single dimentional with state</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <i className="text-success">{this.state.msg}</i>
                        <input type="text" value={this.state.tempItem} className="form-control" onChange={this.updateItem}/> <br />
                        <button className="btn btn-info btn-block" onClick={this.save}>Save</button>
                    </div>

                    <div className="col-md-9">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>SI No.</td>
                                    <td>Name</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.item.map((row, index) =>{
                                        return(
                                            <tr key ={index}>
                                            <td>{index +1}</td>
                                            <td>{row}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={this.delete.bind(this, index)}>Delete</button>
                                            </td>
                                        </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
}   
}

export default ArraOne;