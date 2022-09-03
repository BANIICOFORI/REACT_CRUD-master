import React,{ useState } from "react";
  import {Button,Form }from "react-bootstrap";


 function EditUserForm(props) {

    const [username,setUsername]= useState(props.userInfo.username);
    const [email,setEmail]= useState(props.userInfo.email);
    const [mobile,setMobile]= useState(props.userInfo.mobile);
    const [password,setPassword]= useState(props.userInfo.password);


   

    const handleSubmit =(e)=>{
      e.preventDefault();
      props.updateUser(props.userInfo.id,{username,email,mobile,password});
      setUsername("");
      setEmail("");
      setMobile("");
      setPassword("");
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
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Enter your password"
         value={password} 
         onChange={(e) => {
            setPassword(e.target.value)
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