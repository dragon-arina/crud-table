import React, {Component} from 'react';
import Table from './Compoment/Table';



export default class App extends Component {
    render(){
    return(
      <Table />
    )
  }
  }


// export default function App() {
//   const [userData, setUserData] = useState(data);
//   const [addFormData, setAddFormData] = useState(initialValues);

//   const handleAddFormChange = (e) => {
//      e.preventDefault();

//      const fieldName = e.target.getAttribute("name"); 
//      const fieldValue = e.target.value; 
//      const newFormData = {...addFormData}; 
//      newFormData[fieldName] = fieldValue; 
//      setAddFormData(newFormData);

//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       fullName: addFormData.fullName, 
//       address: addFormData.address, 
//       phoneNumber: addFormData.phoneNumber, 
//       email: addFormData.email,
//     };

//     const newContacts = [...userData, newContact]; 
//     setUserData(newContacts); 
//   }

//   return (
//     <div className="app">
//           <table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th>Phone number</th>
//                 <th>Email</th> 
//                 <th>Actions</th> 
//               </tr>

//             </thead>


//             <tbody>

//               {userData.map((user) => 
//               <ReadOnlyRow user={user}/>
//                 )}

              
//             </tbody>

//           </table>

 
        //  <div>
        //   <form onSubmit={handleAddFormSubmit}>
        //     <input 
        //     name='fullName'
        //     placeholder="Write your name" 
        //     onChange={handleAddFormChange}                    
        //     />
            
        //     <input 
        //     name='address'
        //     placeholder="Write your address" 
        //     onChange={handleAddFormChange} 
        //     />

        //     <input 
        //     name='phoneNumber'
        //     placeholder="Write your phone number" 
        //     onChange={handleAddFormChange} 
           
        //     />
        //     <input 
        //     name='email'
        //     placeholder="Write your email" 
        //     onChange={handleAddFormChange} 
           
        //     />

        //     <div className='buttons-wrapper'>
        //       <button type="reset">Clean</button>
        //       <button type="submit">Add</button>
        //     </div>

        //   </form>
        //  </div>
//     </div>
//   );
// }

