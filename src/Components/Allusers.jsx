import { Container, Row } from "react-bootstrap";
import User from "./User";
import {useSelector } from "react-redux";

function Allusers(props) {
	const { users } = useSelector((state) => {
		return state;
});

	return (
		<>
			<Container>
				<Row>
					{/* //{props.userData.map((item, index) => */}
					{users.map((item,index) => {
						return (
							<User
								key={index}
								 userInfo={item}
								// key={users.id}
								//userInfo={users}
								deleteUser={props.deleteUser}
								 updateUser={props.updateUser}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default Allusers;
