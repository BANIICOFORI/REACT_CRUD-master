import React,{ useState } from "react";
import {Button,Form }from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../Actions/usersAction";
import {db} from '../Firebase/Config'
import { doc, setDoc, updateDoc, serverTimestamp, timestamp } from "firebase/firestore";


function EditUserForm(props) {
    const [username,setUsername]= useState(props.userInfo.username);
    const [email,setEmail]= useState(props.userInfo.email);
    const [mobile,setMobile]= useState(props.userInfo.mobile);
    const [address,setAddress]= useState(props.userInfo.address);
    const dispatch = useDispatch();

    const handleSubmit  = async(e)=>{
      e.preventDefault();
      // props.updateUser(props.userInfo.id,{username,email,mobile,password});
      let userInfo ={id:props.userInfo.id,username,email,mobile,address,timestamp: serverTimestamp()};
    try {
      //dispatch(updateUser(userInfo));
      const updateRef = doc(db, "Users_TB", userInfo.id);

      // Set the "capital" field of the city 'DC'
        await updateDoc(updateRef,userInfo);
    } catch (e) {
      console.log(e);
    }
      

      setUsername("");
      setEmail("");
      setMobile("");
      setAddress("");
      props.hide();
  };
        
  return (
    <Form>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username"
         placeholder="Enter your username"
         value={username} 
         onChange={(e) => {
            setUsername(e.target.value);
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Enter your email"
         value={email} 
         onChange={(e) => {
            setEmail(e.target.value);
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="mobile"
         placeholder="Enter your gen"
         value={mobile} 
         onChange={(e) => {
            setMobile(e.target.value)
         }}
         />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address"
         placeholder="Enter your address"
         value={address} 
         onChange={(e) => {
            setAddress(e.target.value)
         }}
         />
      </Form.Group>
       
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Update
      </Button>
    </Form>

  );
}
export default EditUserForm;