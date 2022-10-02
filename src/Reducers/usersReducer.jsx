import{v4 as uuid} from "uuid";

let initialState={
 
    users:[]
};
const  usersReducer =(state=initialState,action)=>{
      switch (action.type) {
        case "ADD_USER":
        
          return {...state,users: action.payload};
        
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