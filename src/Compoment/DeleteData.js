import React, {Component} from "react";

export default class DeleteData extends Component{
    render(){
        const{deleteData, elementId} = this.props
        return(
            <React.Fragment>
                <button
                type="button"
                className="button-delete"
                disabled={false}
                onClick={(event) => deleteData(event, elementId)}           
                >
                Delete
                </button>
            </React.Fragment>
        )
    }
}