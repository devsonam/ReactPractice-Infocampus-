import React, {Component} from 'react';
class Crud extends Component{
    constructor(){
        super();
        this.state = {
            item: ["Apple", "Orange", "Mango", "Banana"],
            tempItem: '',
            msg: ''
        }
        
    }
updateItem = (event) =>{
this.setState({
    tempItem: event.target.value
    
})
}
saveItem = () =>{
    this.setState({
        item: this.state.item.concat(this.state.tempItem),
        msg: "Item Added"
    })
}
delete = (index) =>{
var newItem = this.state.item.splice(index, 1)
this.setState({
    item: this.state.item.splice(newItem)
})
}
 render(){
     return(
         <div className="container">
            <div className="row form-group">
                <div className="col-md-12">
                    <h3 className="text-center text-danger">CRUD Example</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <i>{this.state.msg}</i>
                    <input type="text" value = {this.state.tempItem} className="form-control" onChange={this.updateItem}/> <br />
                    <button className="btn btn-success btn-block" onClick={this.saveItem}>Save</button>
                </div>

                <div className="col-md-9">
                    <table className="table table-bordered">
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </thead>

                        <tbody>
                            {
                                this.state.item.map((row, index) =>{
                                return (
                                    <tr key={index}>
                                    <td>{index}</td>
                                    <td>{row}</td>
                                    <td>
                                    <button className="btn btn-danger" onClick={this.delete}>Delete</button>
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

export default Crud;