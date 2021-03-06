import React, {Component} from 'react'
import "./User.css"


class User extends Component {
   
    state = {
        isLoading: true,
        users: null
    }


    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({users:data, isLoading:false})
    }


    render(){
        const {users, isLoading} = this.state

        if( isLoading || !users ){
            return <div className="container">Loading ... </div>
        }
        else{
            return (
                <div className="container">
        
                    <h1>Users</h1>
                    <div className="meta-table">
        
                        <div className="meta-table-title">User List</div>
        
                        <div className="meta-table-field">
                            <input placeholder="Seach User..." />
                            <i className="fas fa-search search-icon"></i>
                        </div>
        
                    </div>
        
                    
        
                    <table className="table-User">
         
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        {users.slice(0, 7).map(user=>{
                            return (
                                    <tbody key={user.id}>

                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.id % 2 ==0 ? "Admin": "User"}</td>
                                            <td className="actions-table">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash"></i>
                                            </td>
                                        </tr>
                                    </tbody>

                            )
                        })}
                        
                        
                    </ table>
                </div>
            )
        }
        
    }
   
}

export default User
