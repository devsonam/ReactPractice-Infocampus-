import React, {Component} from 'react';
const userList = [
    {name: "Sonam", mobile: 8709793287, address: "AECS Layout Marathalli", edu: "B.Tech"},
    {name: "Rupam", mobile: 7636463546, address: "Konhara Road Hajipur", edu: "B.C.A"},
    {name: "Vicky", mobile: 9836254622, address: "Rajpoot Colony", edu: "B.Tech"},
    {name: "Rahul", mobile: 8234050360, address: "Delhi", edu: "B.Tech"}
    ];
class Home extends Component{
    render(){

        return(
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <h3 className="text-center">Total USer List: {userList.length}</h3>
            </div>
            {
            userList.map((user)=>{
                return(
                    <div className="col-md-3">
                   
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                {user.name}
                            </div>
                            <div className="card-body">
                               <p>Mobile:  {user.mobile}</p>
                               <p>Address:  {user.address}</p>
                               <p>Education:  {user.edu}</p>
                            </div>
                        </div>
                </div>
                )
            })
                
        }
            
            </div>
            
        </div>
        );
    }
}

export default Home;