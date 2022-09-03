import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function User(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
    console.log("items is Delete");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            updateUser={props.updateUser}
            hide={handleClose}
            userInfo={props.userInfo}
          />
        </Modal.Body>
      </Modal>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Username : {props.userInfo.username}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Email :{props.userInfo.email}
            </Card.Subtitle>
            <Card.Text>Mobile : {props.userInfo.mobile}</Card.Text>
            <Card.Text>Password : {props.userInfo.password}</Card.Text>
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
export default User;
