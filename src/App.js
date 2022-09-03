import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Allusers from "./Components/Allusers";

import AddUsersForm from "./Components/AddUsersForm";

function App() {
  const [users, setUsers] = useState([
    {
      username: "Nicholas Ofori Boadi",
      email: "baniicofori@gmail.com",
      mobile: "0243889977",
      password:"baniico@1",
      id: "udiue9893e03-kked",
    },
    {
      username: "Herbert Ofori Boadi",
      email: "herberto@gmail.com",
      mobile: "0244009988",
      password:"baniico@1",
      id: "edjjdjdjdjdkskw",
    },
    {
      username: "Humphrey Dwamena Boadi",
      email: "humphrey@gmail.com",
      mobile: "0244404040",
      password:"baniico@1",
      id: "uuueiriedm003wwsw",
    },
  ]);

  const AddNewUser = (user) => {
    user.id = Math.random().toString(36);
    setUsers([...users, { username: user.username, email: user.email, mobile: user.mobile,password:user.password }]);
    console.log(user);
  };
   
  const handleUpdate=(id,updateInfo)=>{
    setUsers(
        users.map((user)=>{
          if(user.id===id){
            return updateInfo;
          }
          return user; 
        })

    );
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <AddUsersForm newUser={AddNewUser} />
          </Col>
          <Col>
            <Allusers 
            userData={users} 
            deleteUser={deleteUser} 
            updateUser={handleUpdate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
