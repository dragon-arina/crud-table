import React, { Component } from 'react';
import '../App.css';
import CreateData from './createData';
import Users from './Users';

export default class Table extends Component {
  constructor(props){  
    super(props);  
    this.state = {
      textInputOpen: false,
      buttonStatus: "CREATE",
      alldata: [],
      initialValues: {
          fullName: "", 
          address: "", 
          phoneNumber: "", 
          email:"", 
      }, 
      elementIDCopy:"",
      messageError:{
        fullName: "Full name is empty", 
        address: "Address is empty", 
        phoneNumber: "Phone number is empty", 
        email:"Email is empty"
      }
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createData = this.createData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.handleCreateOpen = this.handleCreateOpen.bind(this);
    this.editButton = this.editButton.bind(this);
    this.createButton = this.createButton.bind(this);
    }

    handleChange = (e) => {
      let {fullName, address, phoneNumber, email } = this.state.initialValues
        if (e.target.name === "fullName") fullName = e.target.value 
        else if (e.target.name === "address") address = e.target.value 
        else if (e.target.name === "phoneNumber") phoneNumber = e.target.value 
        else if (e.target.name === "email") email = e.target.value
        this.setState({initialValues: {
          fullName: fullName, 
          address: address, 
          phoneNumber: phoneNumber, 
          email: email
        }})
        
        let error = "";
        if(e.target.name === "fullName" && e.target.value == null) 
        error = `${e.target.value} cannot be empty`

    };

     
     handleSubmit = (e) => {
      e.preventDefault();
      const {initialValues} = this.state 
      console.log(initialValues)

     }

     handleCreateOpen(){
      this.setState({textInputOpen:!this.state.textInputOpen})
     }

     componentDidMount = () =>{
      this.getData();
     }
     getData(){
      this.setState(() => {
        fetch("http://localhost:3002/users")
        .then((response) => {
          if (!response.ok){
            throw new Error("Unexpected Server Response");
          }
          return response.json()
        })
        .then(result => this.setState({alldata: result}))
        .catch(err =>  console.log("Error: ", err));
      });
     }

     createData() {
      fetch("http://localhost:3002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.initialValues)
      }).then(
        (response) => {
          this.setState({
            buttonStatus:"CREATE", 
            initialValues: {
              fullName: "",
              address: "",
              phoneNumber: "",
              email: ""
            }
          })});
          console.log(this.state.buttonStatus)
      this.getData();
    }

     deleteData(event, id){
      fetch("http://localhost:3002/users/" + id, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          initialValues: {
            fullName: "",
            address: "",
            phoneNumber: "",
            email: ""
          }});
        this.getData();
      })
     }

     updateData(event, id){
      fetch("http://localhost:3002/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.initialValues)
      })
      .then(response => response.json())
      .then(response => {
        this.getData();
      })
     }
     createButton(){
      this.setState({buttonStatus:"CREATE"})
      this.handleCreateOpen()
     }
     editButton(event, id){
      this.setState({buttonStatus:"EDIT", elementIDCopy:id})
      this.handleCreateOpen()
     }

  render(){
    return(
        <>
        <CreateData 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          initialValues = {this.state.initialValues}
          createData = {this.createData}
          textInputOpen = {this.state.textInputOpen}
          createButton = {this.createButton}
          updateData = {this.updateData}
          elementIDCopy = {this.state.elementIDCopy}
          buttonStatus = {this.state.buttonStatus}          
        />
        <Users
        alldata = {this.state.alldata}
        initialValues = {this.state.initialValues}
        deleteData = {this.deleteData}
        updateData = {this.updateData}
        handleChange = {this.handleChange}
        editButton = {this.editButton}
        />
      </>
    )}
  }

