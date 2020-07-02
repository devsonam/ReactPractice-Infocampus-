import React, {Component} from 'react';

class DataState extends Component{
    constructor(){
        super();
        this.state = {
            msg : "Hey",
            count: 1,
            input: "This is Empty Text",
            item: ["Apple", "Orange", "Grapes"],
            tempname: '',
            message: ''
        }
    }
updateButton = () =>{
   
    this.setState({
        msg: "Hello Changed",
        count: this.state.count+1
    })
}
handleData = async e=>{
    await this.setState({
        input: e.target.value
    })
}
UpdateItem = (i) =>{
    this.setState({
        tempname: i.target.value
    })
}
SaveItem = () =>{
    // let z = [...this.state.item];
    // z.push(this.state.tempname)
    if(this.state.tempname){
    this.setState({
        item: [...this.state.item, this.state.tempname],
        tempname : '',
        message: "Item Added"
    })
}
}
render(){
        return(
            <div className="container height500">
            <div className="row">
                <div className="col-md-12">
                    <button className="text-center" onClick={this.updateButton}>Click Me</button>
                    <h3 className="text-center">{this.state.msg}</h3>
                    <h3 className="text-center">{this.state.count}</h3>
                </div>

            </div>

            <div className="row">
            <div className="col-md-3">
                <h3 className="text-center">{this.state.input}</h3>
                <input type="text" placeholder="Enter Here" className="form-control" onKeyUp={this.handleData}/>
            </div>

            <div className="col-md-3">
            <h3 className="text-center">State Update: {this.state.tempname}</h3>
            <p>{this.state.message}</p>
            <input type="text" value={this.state.tempname} placeholder="Enter Here" className="form-control" onChange={this.UpdateItem}/><br />
            <button className="btn btn-success" onClick={this.SaveItem}>Save Item</button>
        </div>
        <div className="col-md-6">
        <h3 className="text-center">Item List </h3>
                <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                this.state.item.map((row, index) =>{
                    return (
                    <tr key = {index}>
                        <td>{index}</td>
                        <td>{row}</td>
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
export default DataState;