import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Form from"react-bootstrap/Form";
import {v4 as uuid} from "uuid";
import { doc, setDoc, serverTimestamp, timestamp } from "firebase/firestore";
import {db} from '../Firebase/Config';
 function AddUsersForm(props) {
    const [username,setUsername]= useState(" ");
    const [email,setEmail]= useState(" ");
    const [mobile,setMobile]= useState(" ");
    const [address,setAddress]= useState(" ");

   //const dispatch = useDispatch();
    const handleSubmit = async(e) => { 
      e.preventDefault();
      // props.newUser({username,email,mobile,password});
      let userInfo = {
         id:uuid(),
         username,
         email,
         mobile,
         address,
         timestamp: serverTimestamp(),
      };
      try {
			await setDoc(doc(db, "Users_TB", userInfo.id), userInfo);
		} catch (e) {
			console.log(e);
		}
      setUsername("");
      setEmail("");
      setMobile("");
      setAddress("");
  };
        
  return (
    <Form>
      
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="username"
         placeholder="Enter your username"
         value={username} 
         onChange={(e) => {
            setUsername(e.target.value)
         }}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Enter your email"
         value={email} 
         onChange={(e) => {
            setEmail(e.target.value)
         }}
         />
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="mobile"
         placeholder="Enter your mobile number"
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

      
      <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
    </Form>

  );
}
export default AddUsersForm;