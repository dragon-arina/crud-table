import React, {Component} from "react";

export default class UpdateData extends Component{
    render(){
        const {elementId, editButton} = this.props 
        return(
            <React.Fragment>
                <button
                type="button"
                className="button-update"
                disabled={false}
                onClick={(event) => editButton(event, elementId)}  
                >
                Edit
                </button>
            </React.Fragment>
        )
    }
}

