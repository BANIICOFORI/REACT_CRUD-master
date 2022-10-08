import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { RemoveUser } from "../Actions/usersAction";
import { connect, useDispatch } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../Firebase/Config'

function User(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = async(e) => {
    e.preventDefault();
    // dispatch(RemoveUser(props.userInfo.id));
    // props.deleteUser(props.userInfo.id);
    try {
       await deleteDoc(doc(db, "Users_TB", props.userInfo.id));
    console.log("items is Delete");
    } catch (e) {
      console.log(e);
    }
   
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            // updateUser={props.updateUser}
            hide={handleClose}
            userInfo={props.userInfo}
          />
        </Modal.Body>
      </Modal>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Fullname : {props.userInfo.username}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Email :{props.userInfo.email}
            </Card.Subtitle>
            <Card.Text>Mobile : {props.userInfo.mobile}</Card.Text>
            <Card.Text>Address : {props.userInfo.address}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
const mapDispatchToProps = {
	RemoveUser,
};
export default connect(null,mapDispatchToProps) (User);
