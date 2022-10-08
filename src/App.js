import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from 'react-redux';
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Allusers from "./Components/Allusers";
import AddUsersForm from "./Components/AddUsersForm";
import {
	collection,
	orderBy,
	query,
	getDocs,
	onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "./Firebase/Config";
import { addUser } from "./Actions/usersAction";
import { useDispatch } from "react-redux";

function App() {
 const dispatch = useDispatch();
 useEffect(()=>{
  try {
    const readData = async () => {
      const q = query(collection(db, "Users_TB"), orderBy("timestamp", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          
          users.push({...doc.data(),id:doc.id});
         // users.push(doc.data());
        });
        dispatch(addUser(users));
        console.log(users);
      });
    };
    readData();
    
  } catch (e) {
    console.log(e);
  }
 },[]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <AddUsersForm 
            //newUser={AddNewUser}
             />
          </Col>
          <Col>
            <Allusers 
           // userData={users} 
            //deleteUser={deleteUser} 
           // updateUser={handleUpdate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  users:state.users
})

export default connect(mapStateToProps)(App);
