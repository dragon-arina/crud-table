import React, {Component} from "react";
import DeleteData from "./DeleteData";
import UpdateData from "./UpdateData";

export default class Users extends Component{
    render(){
        const { alldata, deleteData, editButton } = this.props; 
        var row = [];
        alldata.forEach(element => {
            row.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.fullName}</td>
                <td>{element.address}</td>
                <td>{element.phoneNumber}</td>
                <td>{element.email}</td>
                <td>
                    <DeleteData
                    elementId = {element.id}
                    deleteData = {deleteData}
                    />
                </td>
                <td>
                <UpdateData
                elementId = {element.id}
                editButton = {editButton}
                /> 
                </td>
            </tr>
            )
        });
          
        return(
            <div className="app">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone number</th>
                            <th>Email</th> 
                            <th>Delete</th> 
                            <th>Edit</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
            </table>
            </div>
        )
    }
}
