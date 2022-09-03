import { Container, Row } from "react-bootstrap";
import User from "./User";

function Allusers(props) {
	return (
		<>
			<Container>
				<Row>
					{/* //{props.userData.map((item, index) => */}
					{props.userData.map((users) => {
						return (
							<User
								// key={index}
								// userInfo={item}
								key={users.id}
								userInfo={users}
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
