import React, {Component} from 'react';
const userList = ["Manoj", "Ganesh", "Rupesh", "Jaaved", "Ali", "Alex", "Silex", "Anita"];

class Person extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
            {
                userList.map((user)=>{
                    return(
                        <div className="col-md-3">
                        <img src ={`https://joeschmoe.io/api/v1/${user}`} />
                        <h3 className="text-center">{user}</h3>
                    </div>
                    )
                })
               
                
            }
            </div>
            
        </div>
        );
    }
}
export default Person;