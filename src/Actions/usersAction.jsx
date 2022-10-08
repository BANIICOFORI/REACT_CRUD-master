

export const addUser = (newUser) => {
	return {
		type: "ADD_USER",
		payload: newUser,
	};
    
};
export const updateUser = (userData)=>{
    return{
      type: "UPDATE_USER",
      payload: {userData}
    }
  }
  export const RemoveUser = (user_id) => {
    return (dispatch,state,{getFirestore})=>{ 
      getFirestore()
      .collection('User_TB')
      .doc(user_id)
      .delete()
      .then(() =>{});
      // type: "DELETE_USER",
      // payload: user_id,
    };
  };