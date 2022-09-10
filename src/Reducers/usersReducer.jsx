import{v4 as uuid} from "uuid";

let initialState={
 
    users:[
        {
          username: "Nicholas Ofori Boadi",
          email: "baniicofori@gmail.com",
          mobile: "0243889977",
          password:"baniico@1",
          id: uuid(),
        },
        {
          username: "Herbert Ofori Boadi",
          email: "herberto@gmail.com",
          mobile: "0244009988",
          password:"baniico@1",
          id: uuid(),
        },
        {
          username: "Humphrey Dwamena Boadi",
          email: "humphrey@gmail.com",
          mobile: "0244404040",
          password:"baniico@1",
          id: uuid(),
        },
      ]
};
const  usersReducer =(state=initialState,action)=>{
      switch (action.type) {
        case "ADD_USER":
          // const newUser ={
          //   // username:action.payload.username,
          //   // email:action.payload.email,
          //   // mobile:action.payload.mobile,
          //   // password:action.payload.password,
          // };
          return {...state,users:[...state.users, action.payload]};
        
          case "DELETE_USER":
            const unDeleteUsers = state.users.filter((user)=>user.id!==action.payload)
            return {...state , users:unDeleteUsers}

            case "UPDATE_USER":

				const updatedUser = state.users.map((user)=>{
					if(user.id===action.payload.userData.id){
						return action.payload.userData
					}
					else {return user}
				})
				return {...state , users:updatedUser}
          
            default:
          return state;
      }
};
export default usersReducer;