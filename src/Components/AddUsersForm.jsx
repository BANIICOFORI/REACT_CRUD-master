import React,{ useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from"react-bootstrap/Form";


 function AddUsersForm(props) {
    const [username,setUsername]= useState(" ");
    const [email,setEmail]= useState(" ");
    const [mobile,setMobile]= useState(" ");
    const [password,setPassword]= useState(" ");


   

    const handleSubmit =(e)=>{
      e.preventDefault();
      props.newUser({username,email,mobile,password});
      setUsername("");
      setEmail("");
      setMobile("");
      setPassword("");
  };
        
  return (
    <Form>
      <Row>
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
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
      </Row>
      <Row>
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
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Enter your password"
         value={password} 
         onChange={(e) => {
            setPassword(e.target.value)
         }}
         />
      </Form.Group>

      </Row>
      <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
    </Form>

  );
}
export default AddUsersForm;