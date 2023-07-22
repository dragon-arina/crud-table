import React, { Component } from "react";


export default class CreateData extends Component{
    render() {
        const {handleChange, handleSubmit, fullName, address, 
          phoneNumber, email, createData, textInputOpen, buttonStatus, updateData, createButton, elementIDCopy} = this.props
        
          const button = buttonStatus === "CREATE" ? (
          <button onClick={createData} type="submit" className="button-create" >
          Create
        </button>) : 
        (<button onClick={(event) => updateData(event, elementIDCopy)} type="submit" className="button-create" >
          Edit
        </button>)
        
        return(
          <React.Fragment>
          <button
          type="button"
          disabled={false}
          className="button-add"
          onClick={createButton}
          >
            Add User
          </button>
            <div className={`ModalClose ${ textInputOpen === true ? "Modal" : ""}`}>
            <form onSubmit={handleSubmit}>
              <input 
              name="fullName"
              placeholder="Write your name" 
              value = {fullName}
              onChange={handleChange}    
              type="text"
              />
              <input 
              name="address"
              placeholder="Write your address" 
              value = {address}
              onChange={handleChange}
              />
              <input 
              name="phoneNumber"
              placeholder="Write your phone number" 
              value = {phoneNumber}
              onChange={handleChange}
              />
            <input 
              name="email"
              placeholder="Write your email" 
              value = {email}
              onChange={handleChange} 
              />
              <div className= "buttons-wrapper">

                <button type="reset">
                  <div className="button-clean">
                    Clean
                  </div>
                </button>
                {button}

              </div>
            </form>
          </div>

          </React.Fragment>
       
        )
    }
}

